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

export const getManaClass = (mana) => {
    if (manaMapping[mana]) {
        return manaMapping[mana];
    }
    return mana.replace('/', '').toLowerCase();
};

