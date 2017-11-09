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
} from '../../../core/reducers/data/data.helper';

export function dataDeckRequestStarted() {
    return {
        type: DATA_DECK_REQUEST_STARTED,
        payload: {},
        meta: {}
    };
}

export function dataDeckRequestSuccess() {
    return {
        type: DATA_DECK_REQUEST_SUCCESS,
        payload: {},
        meta: {}
    };
}

export function dataDeckRequestFailed() {
    return {
        type: DATA_DECK_REQUEST_FAILED,
        payload: {},
        meta: {}
    };
}

export function dataDeckCreate(deck) {
    return {
        type: DATA_DECK_CREATE,
        payload: {deck},
        meta: {}
    };
}

export function dataDeckUpdate(deckId, deck) {
    return {
        type: DATA_DECK_UPDATE,
        payload: {deckId, deck},
        meta: {}
    };
}

export function dataDeckDelete(deckId) {
    return {
        type: DATA_DECK_DELETE,
        payload: {deckId},
        meta: {}
    };
}

export function dataDeckGetList(decks) {
    return {
        type: DATA_DECK_GET_LIST,
        payload: {decks},
        meta: {}
    };
}

export function dataCardRequestSuccess() {
    return {
        type: DATA_CARD_REQUEST_SUCCESS,
        payload: {},
        meta: {}
    };
}

export function dataCardRequestStarted() {
    return {
        type: DATA_CARD_REQUEST_STARTED,
        payload: {},
        meta: {}
    };
}

export function dataCardRequestFailed() {
    return {
        type: DATA_CARD_REQUEST_FAILED,
        payload: {},
        meta: {}
    };
}

export function dataCardCreate(cardId, card) {
    return {
        type: DATA_CARD_CREATE,
        payload: {cardId, card},
        meta: {}
    };
}

export function dataCardUpdate(cardId, card) {
    return {
        type: DATA_CARD_UPDATE,
        payload: {cardId, card},
        meta: {}
    };
}

export function dataCardDelete(cardId) {
    return {
        type: DATA_CARD_DELETE,
        payload: {cardId},
        meta: {}
    };
}

export function dataCardGetList(cards) {
    return {
        type: DATA_CARD_GET_LIST,
        payload: {cards},
        meta: {}
    };
}
