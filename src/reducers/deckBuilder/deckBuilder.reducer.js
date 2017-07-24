import {Map} from 'immutable';
import {
    GET_CARD_LIST,
    CREATE_CARD,
    UPDATE_CARD,
    DELETE_CARD,
    GET_DECK_LIST,
    CREATE_DECK,
    UPDATE_DECK,
    DELETE_DECK,
    DECK_BUILDER_REQUEST_SUCCESS,
    DECK_BUILDER_REQUEST_FAILED,
    DECK_BUILDER_REQUEST_STARTED,
} from './deckBuilder.helper';

/**
 * @param state
 * @param decks
 */
function getDecks(state, decks) {
    return state.set('decks', decks);
}

/**
 * @param state
 * @param deck
 */
function createDeck(state, deck) {
    return state.setIn(['decks', deck.id, 'deckList'], deck);
}

/**
 * @param state
 * @param cards
 */
function getCards(state, cards) {
    return state.set('cards', {...state.get('cards'), ...cards});
}

/**
 * @param state
 * @param card
 */
function createCard(state, card) {
    return state.set(
        'cards',
        state.setIn(['cards', card.id], card)
    );
}

/**
 * @param state
 * @param deckId
 */
function deckBuilderRequestStarted(state, deckId) {
    return state.setIn(['decks', deckId, 'meta'], {
        'loading': true,
        'error': false
    });
}

/**
 * @param state
 * @param deckId
 */
function deckBuilderRequestSuccess(state, deckId) {
    return state.setIn(['decks', deckId, 'meta'], {
        'loading': false,
        'error': false
    });
}

/**
 * @param state
 * @param deckId
 */
function deckBuilderRequestFailed(state, deckId) {
    return state.setIn(['decks', deckId, 'meta'], {
        'loading': false,
        'error': true
    });
}

/**
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = new Map({}), action) => {
    switch (action.type) {
        case GET_CARD_LIST:
            return getCards(state, action.payload.cards);
        case GET_DECK_LIST:
            return getDecks(state, action.payload.decks);
        case CREATE_CARD:
            return createCard(state, action.payload.card);
        case CREATE_DECK:
            return createDeck(state, action.payload.deck);
        case DECK_BUILDER_REQUEST_STARTED:
            return deckBuilderRequestStarted(state, action.payload.deckId);
        case DECK_BUILDER_REQUEST_SUCCESS:
            return deckBuilderRequestSuccess(state, action.payload.deckId);
        case DECK_BUILDER_REQUEST_FAILED:
            return deckBuilderRequestFailed(state, action.payload.deckId);
        default:
            return state;
    }
};
