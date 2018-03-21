/**
 * ServiceWorkerStorage
 */

export const IDB_TRANSACTION_MODE = {
    readonly: 'readonly',
    readwrite: 'readwrite',
    versionchange: 'versionchange'
};

export function promisify(idbRequest) {
    return new Promise((resolve, reject) => {
        idbRequest.onsuccess = function() {
            resolve(idbRequest.result);
        };
        idbRequest.onerror = reject;
    });
}

export class IndexedDBStorage {
    constructor(dbName, version) {
        if (typeof dbName !== 'string') throw new TypeError('dbName must be string.');
        if (typeof version !== 'number') throw new TypeError('version must be number.');
        const VERSION = version;
        this.DB_NAME = dbName;
        this.STORE_NAME = 'sw_storage';

        const db = indexedDB.open(this.DB_NAME, VERSION);
        db.onupgradeneeded = event => {
            const _db = event.target.result;
            if (_db.objectStoreNames && _db.objectStoreNames.contains(this.STORE_NAME)) return;
            _db.createObjectStore(this.STORE_NAME);
        };
        this.__db = promisify(db);
    }

    _accessAsyncStore(mode) {
        return this.__db.then(db => {
            const transaction = db.transaction(this.STORE_NAME, mode);
            return transaction.objectStore(this.STORE_NAME);
        });
    }

    length() {
        return this._accessAsyncStore(IDB_TRANSACTION_MODE.readonly)
            .then(store => promisify(store.getAllKeys()))
            .then(keys => keys.length);
    }

    key(idx) {
        if (!arguments.length) return Promise.reject(new TypeError('Failed to execute "key" on "Storage"'));
        if (typeof idx !== 'number') idx = 0;
        return this._accessAsyncStore(IDB_TRANSACTION_MODE.readonly)
            .then(store => promisify(store.getAllKeys()))
            .then(keys => keys[idx] || null);
    }

    getItem(key) {
        return this._accessAsyncStore(IDB_TRANSACTION_MODE.readonly)
            .then(store => store.get(key))
            .then(promisify);
    }
    setItem(key, value) {
        return this._accessAsyncStore(IDB_TRANSACTION_MODE.readwrite)
            .then(store => store.put(value, key))
            .then(promisify);
    }
    removeItem(key) {
        return this._accessAsyncStore(IDB_TRANSACTION_MODE.readwrite)
            .then(store => store['delete'](key))
            .then(promisify);
    }
    clear() {
        return this.__db
            .then(db => {
                const transaction = db.transaction(db.objectStoreNames, IDB_TRANSACTION_MODE.readwrite);
                const q = [];
                for (let i = 0, len = db.objectStoreNames.length; i < len; i++) {
                    const storeName = db.objectStoreNames[i];
                    q.push(promisify(transaction.objectStore(storeName).clear()));
                }
                return Promise.all(q);
            });
    }
}
