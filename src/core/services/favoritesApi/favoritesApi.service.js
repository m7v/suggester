const storageCardKey = 'favorites';
const storageLocationKey = 'favorites';
const getFavorites = () => JSON.parse(window.localStorage.getItem(storageCardKey)) || {};
const getFavoritesLocation = () => JSON.parse(window.localStorage.getItem(storageLocationKey)) || {};

export const getCardList = () =>
    Promise.resolve(getFavorites());

export const addCard = (card) => {
    const cards = getFavorites();
    cards[card.id] = card;
    window.localStorage.setItem(storageCardKey, JSON.stringify(cards));

    return Promise.resolve();
};

export const removeCard = (cardId) => {
    const cards = getFavorites();
    delete cards[cardId];
    window.localStorage.setItem(storageCardKey, JSON.stringify(cards));

    return Promise.resolve();
};

export const getLocationList = () =>
    Promise.resolve(getFavoritesLocation());

export const addLocation = (card) => {
    const cards = getFavoritesLocation();
    cards[card.id] = card;
    window.localStorage.setItem(storageLocationKey, JSON.stringify(cards));

    return Promise.resolve();
};

export const removeLocation = (cardId) => {
    const cards = getFavoritesLocation();
    delete cards[cardId];
    window.localStorage.setItem(storageLocationKey, JSON.stringify(cards));

    return Promise.resolve();
};
