const storageKey = 'favorites';
const getFavorites = () => JSON.parse(window.localStorage.getItem(storageKey)) || {};

export const getCardList = () =>
    Promise.resolve(getFavorites());

export const addCard = (card) => {
    const cards = getFavorites();
    cards[card.id] = card;
    window.localStorage.setItem(storageKey, JSON.stringify(cards));

    return Promise.resolve();
};

export const removeCard = (cardId) => {
    const cards = getFavorites();
    delete cards[cardId];
    window.localStorage.setItem(storageKey, JSON.stringify(cards));

    return Promise.resolve();
};
