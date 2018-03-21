import debounce from 'lodash/debounce';
import { IndexedDBStorage } from '../../lib/IndexedDBStorage';

export const sendMessageToSW = function(msg) {
    return new Promise((resolve, reject) => {
        // Create a Message Channel
        const msgChan = new MessageChannel();

        // Handler for recieving message reply from service worker
        msgChan.port1.onmessage = function(event) {
            if (event.data.error) {
                reject(event.data.error);
            } else {
                resolve(event.data);
            }
        };

        if (navigator.serviceWorker.controller) {
            // Send message to service worker along with port for reply
            navigator.serviceWorker.controller.postMessage(msg, [ msgChan.port2 ]);
        }
    });
};

export const swStore = (store) => next => action => {
    debounce(() => {
        const state = store.getState();
        const storage = new IndexedDBStorage('mtg-manager', 1);
        storage.setItem('store', JSON.stringify(state));
    }, 500);

    return next(action);
};
