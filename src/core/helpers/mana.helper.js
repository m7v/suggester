import reduce from 'lodash/reduce';

const manaMapping = {
    U: 'u',
    R: 'r',
    B: 'b',
    G: 'g',
    W: 'w',
    S: 's',
    E: 'e',
    C: 'c',
    P: 'p',
    X: 'x',
    Y: 'y',
    Z: 'z',
    T: 'tap',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    13: '13',
    14: '14',
    15: '15',
    17: '17',
    18: '18',
    19: '19',
    20: '20',
};

const createRegExp = (search) => {
    const baseSearch = {
        '{T}': true,
        '{P}': true,
        '{E}': true,
        '{W}': true,
        '{R}': true,
        '{B}': true,
        '{U}': true,
        '{G}': true,
        '{C}': true,
        '{X}': true,
    };
    const numberSearch = {
        '{1}': true,
        '{2}': true,
        '{3}': true,
        '{4}': true,
        '{5}': true,
        '{6}': true,
        '{7}': true,
        '{8}': true,
        '{9}': true,
    };
    const number = search.replace('{', '').replace('}', '');
    switch (true) {
        case baseSearch[search]:
            return new RegExp(`${search}`, 'g');
        case !!search.match(new RegExp('{[0-9A-Z]\\/[0-9A-Z]}', 'g')):
            return new RegExp('{[0-9A-Z]\\/[0-9A-Z]}', 'g');
        case numberSearch[search]:
            return new RegExp(`{[${number}]}`, 'g');
        default:
            return search;
    }
};

export const getManaClass = (mana) => {
    if (manaMapping[mana]) {
        return manaMapping[mana];
    }
    return mana.replace('/', '').toLowerCase();
};

export const formatText = (text, rootClass) => {
    if (text) {
        const mana = text.match(/\{(.*?)\}/g);
        if (!mana) {
            return text;
        }
        const parsedMap = mana.reduce((agg, rawMana) => {
            agg[ rawMana ] = rawMana.replace('{', '').replace('}', '');
            return agg;
        }, {});

        const iconMap = reduce(parsedMap, (agg, manaLetter, key) => {
            const l = getManaClass(manaLetter);
            /* eslint-disable */
            agg[ key ] = manaLetter.indexOf('/') >= 0
                ? `<span class="${rootClass} ${rootClass}-${l} ms ms-split ms-cost ms-${l}"></span>`
                : `<span class="${rootClass} ${rootClass}-${l} ms ms-cost ms-${l}"></span>`;
            /* eslint-enable */
            return agg;
        }, {});

        return reduce(iconMap, (agg, icon, search) =>
            agg.replace(createRegExp(search), icon), text);
    }
    return text;
};
