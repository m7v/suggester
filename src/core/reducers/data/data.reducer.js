import findIndex from 'lodash/findIndex';
import {
    DATA_DECK_REQUEST_STARTED,
    DATA_DECK_REQUEST_SUCCESS,
    DATA_DECK_REQUEST_FAILED,
    DATA_DECK_CREATE,
    DATA_DECK_UPDATE,
    DATA_DECK_DELETE,
    DATA_DECK_GET_LIST,
    DATA_CARD_REQUEST_SUCCESS,
    DATA_CARD_REQUEST_STARTED,
    DATA_CARD_REQUEST_FAILED,
    DATA_CARD_CREATE,
    DATA_CARD_UPDATE,
    DATA_CARD_DELETE,
    DATA_CARD_GET_LIST,
} from './data.helper';

function dataDeckRequestStarted(state) {
    return {
        ...state,
        decks: {
            ...state.decks,
            error: false,
            loading: true
        }
    };
}

function dataDeckRequestSuccess(state) {
    return {
        ...state,
        decks: {
            ...state.decks,
            error: false,
            loading: false
        }
    };
}

function dataDeckRequestFailed(state) {
    return {
        ...state,
        decks: {
            ...state.decks,
            error: true,
            loading: false
        }
    };
}

function dataDeckCreate(state, deck) {
    const searchedDeckId = findIndex(state.decks.items, data => data.id === deck.id);
    if (searchedDeckId >= 0) {
        return state;
    }
    return {
        ...state,
        decks: {
            ...state.decks,
            items: [
                ...state.decks.items,
                deck,
            ]
        }
    };
}

function dataDeckUpdate(state, deckId, deck) {
    const searchedDeckId = findIndex(state.decks.items, data => data.id === deckId);

    if (searchedDeckId < 0) {
        return state;
    }

    const newItems = [...state.decks.items];
    newItems[searchedDeckId] = {
        ...newItems[searchedDeckId],
        ...deck
    };

    return {
        ...state,
        decks: {
            ...state.decks,
            items: [
                ...newItems,
            ]
        }
    };
}

function dataDeckDelete(state, deckId) {
    return {
        ...state,
        decks: {
            ...state.decks,
            items: [
                ...state.decks.items.filter(item => item.id !== deckId),
            ]
        }
    };
}

function dataDeckGetList(state, decks) {
    return {
        ...state,
        decks: {
            ...state.decks,
            items: [
                ...decks,
            ]
        }
    };
}

function dataCardRequestSuccess(state) {
    return {
        ...state,
        cards: {
            ...state.cards,
            error: false,
            loading: false
        }
    };
}

function dataCardRequestStarted(state) {
    return {
        ...state,
        cards: {
            ...state.cards,
            error: false,
            loading: true
        }
    };
}

function dataCardRequestFailed(state) {
    return {
        ...state,
        cards: {
            ...state.cards,
            error: true,
            loading: false
        }
    };
}

function dataCardCreate(state, card) {
    const searchedCardId = findIndex(state.cards.items, data => data.id === card.id);
    if (searchedCardId >= 0) {
        const newItems = [...state.cards.items];
        newItems[searchedCardId] = {
            ...newItems[searchedCardId],
            ...card,
            count: newItems[searchedCardId].count + card.count
        };

        return {
            ...state,
            cards: {
                ...state.cards,
                items: [
                    ...newItems,
                ]
            }
        };
    }
    return {
        ...state,
        cards: {
            ...state.cards,
            items: [
                ...state.cards.items,
                card,
            ]
        }
    };
}

function dataCardUpdate(state, cardId, card) {
    const searchedCardId = findIndex(state.cards.items, data => data.id === cardId);

    if (searchedCardId < 0) {
        return state;
    }

    const newItems = [...state.cards.items];
    newItems[searchedCardId] = {
        ...newItems[searchedCardId],
        ...card
    };

    return {
        ...state,
        cards: {
            ...state.cards,
            items: [
                ...newItems,
            ]
        }
    };
}

function dataCardDelete(state, cardId) {
    return {
        ...state,
        cards: {
            ...state.cards,
            items: [
                ...state.cards.items.filter(item => item.id !== cardId),
            ]
        }
    };
}

function dataCardGetList(state, cards) {
    return {
        ...state,
        cards: {
            ...state.cards,
            items: [
                ...cards,
            ]
        }
    };
}

export default (state = {}, action) => {
    switch (action.type) {
        case DATA_DECK_REQUEST_STARTED:
            return dataDeckRequestStarted(state, action);
        case DATA_DECK_REQUEST_SUCCESS:
            return dataDeckRequestSuccess(state, action);
        case DATA_DECK_REQUEST_FAILED:
            return dataDeckRequestFailed(state, action);
        case DATA_DECK_CREATE:
            return dataDeckCreate(state, action.payload.deck);
        case DATA_DECK_UPDATE:
            return dataDeckUpdate(state, action.payload.deckId, action.payload.deck);
        case DATA_DECK_DELETE:
            return dataDeckDelete(state, action.payload.deckId);
        case DATA_DECK_GET_LIST:
            return dataDeckGetList(state, action.payload.decks);
        case DATA_CARD_REQUEST_SUCCESS:
            return dataCardRequestSuccess(state, action);
        case DATA_CARD_REQUEST_STARTED:
            return dataCardRequestStarted(state, action);
        case DATA_CARD_REQUEST_FAILED:
            return dataCardRequestFailed(state, action);
        case DATA_CARD_CREATE:
            return dataCardCreate(state, action.payload.cardId, action.payload.card);
        case DATA_CARD_UPDATE:
            return dataCardUpdate(state, action.payload.cardId, action.payload.card);
        case DATA_CARD_DELETE:
            return dataCardDelete(state, action.payload.cardId);
        case DATA_CARD_GET_LIST:
            return dataCardGetList(state, action.payload.cards);
        default:
            return state;
    }
};
