import {
    GET_DECK_LIST,
    GET_CARD_LIST,
    ADD_CARD,
    ADD_DECK,
    DELETE_DECK,
    DECK_BUILDER_REQUEST_STARTED,
    DECK_BUILDER_REQUEST_SUCCESS,
    DECK_BUILDER_REQUEST_FAILED
} from '../../reducers/deckBuilder/deckBuilder.helper';

/**
 * @param decks
 * @returns {{type, photoList: *}}
 */
export function getDeckList(decks) {
    return {
        type: GET_DECK_LIST,
        payload: {decks},
        meta: {}
    };
}

/**
 * @param deck
 * @returns {{type, photoList: *}}
 */
export function createDeck(deck) {
    return {
        type: ADD_DECK,
        payload: {deck},
        meta: {}
    };
}

/**
 * @param deckId
 * @returns {{type, photoList: *}}
 */
export function deleteDeck(deckId) {
    return {
        type: DELETE_DECK,
        payload: {deckId},
        meta: {}
    };
}

/**
 * @param cards
 * @returns {{type, photoList: *}}
 */
export function getCardList(cards) {
    return {
        type: GET_CARD_LIST,
        payload: {cards},
        meta: {}
    };
}

/**
 * @param card
 * @returns {{type, photoList: *}}
 */
export function createCard(card) {
    return {
        type: ADD_CARD,
        payload: {card},
        meta: {}
    };
}

/**
 * @param card
 * @param deckId
 * @returns {{type, photoList: *}}
 */
export function addCard(card, deckId) {
    return {
        type: ADD_CARD,
        payload: {card, deckId},
        meta: {}
    };
}

/**
 * @returns {{type}}
 */
export function deckBuilderRequestStarted(deckId) {
    return {
        type: DECK_BUILDER_REQUEST_STARTED,
        payload: {deckId},
        meta: {}
    };
}

/**
 * @returns {{type}}
 */
export function deckBuilderRequestSuccess(deckId) {
    return {
        type: DECK_BUILDER_REQUEST_SUCCESS,
        payload: {deckId},
        meta: {}
    };
}

/**
 * @returns {{type}}
 */
export function deckBuilderRequestFailed(deckId) {
    return {
        type: DECK_BUILDER_REQUEST_FAILED,
        payload: {deckId},
        meta: {}
    };
}
