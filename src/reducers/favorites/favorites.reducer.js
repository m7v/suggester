import {
    FAVORITES_CARD_REQUEST_SUCCESS,
    FAVORITES_CARD_REQUEST_STARTED,
    FAVORITES_CARD_REQUEST_FAILED,
    FAVORITES_CARD_ADD,
    FAVORITES_CARD_DELETE,
    FAVORITES_CARD_GET_LIST,
} from './favorites.helper';

function favoritesCardRequestSuccess(state) {
    return {
        ...state,
        meta: {
            ...state.meta,
            error: false,
            loading: false
        }
    };
}

function favoritesCardRequestStarted(state) {
    return {
        ...state,
        meta: {
            ...state.meta,
            error: false,
            loading: true
        }
    };
}

function favoritesCardRequestFailed(state) {
    return {
        ...state,
        meta: {
            ...state.meta,
            error: true,
            loading: false
        }
    };
}

function favoritesCardAdd(state, card) {
    return {
        ...state,
        items: {
            ...state.items,
            [card.id]: card,
        }
    };
}

function favoritesCardDelete(state, cardId) {
    const newItems = { ...state.items };
    delete newItems[cardId];
    return {
        ...state,
        items: newItems
    };
}

function favoritesCardGetList(state, cards) {
    return {
        ...state,
        items: {
            ...cards
        }
    };
}

export default (state = {}, action) => {
    switch (action.type) {
        case FAVORITES_CARD_REQUEST_SUCCESS:
            return favoritesCardRequestSuccess(state, action);
        case FAVORITES_CARD_REQUEST_STARTED:
            return favoritesCardRequestStarted(state, action);
        case FAVORITES_CARD_REQUEST_FAILED:
            return favoritesCardRequestFailed(state, action);
        case FAVORITES_CARD_ADD:
            return favoritesCardAdd(state, action.payload.card);
        case FAVORITES_CARD_DELETE:
            return favoritesCardDelete(state, action.payload.cardId);
        case FAVORITES_CARD_GET_LIST:
            return favoritesCardGetList(state, action.payload.cards);
        default:
            return state;
    }
};
