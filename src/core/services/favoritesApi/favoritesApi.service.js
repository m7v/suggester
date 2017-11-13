const storageKey = 'favorites';
const getFavorites = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(window.localStorage.getItem(storageKey)) || {};
    }
    return {};
};

export const getCardList = () =>
    Promise.resolve(getFavorites());

export const addCard = (card) => {
    if (typeof window !== 'undefined') {
        const cards = getFavorites();
        cards[card.id] = card;
        window.localStorage.setItem(storageKey, JSON.stringify(cards));
    }

    return Promise.resolve();
};

export const removeCard = (cardId) => {
    if (typeof window !== 'undefined') {
        const cards = getFavorites();
        delete cards[cardId];
        window.localStorage.setItem(storageKey, JSON.stringify(cards));
    }

    return Promise.resolve();
};
