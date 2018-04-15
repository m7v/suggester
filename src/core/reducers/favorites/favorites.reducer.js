import {
    FAVORITES_CARD_REQUEST_SUCCESS,
    FAVORITES_CARD_REQUEST_STARTED,
    FAVORITES_CARD_REQUEST_FAILED,
    FAVORITES_CARD_ADD,
    FAVORITES_CARD_DELETE,
    FAVORITES_CARD_GET_LIST,

    FAVORITES_LOCATION_ADD,
    FAVORITES_LOCATION_DELETE,
    FAVORITES_LOCATION_GET_LIST
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

function getFavoritesCardList(state, cards) {
    return {
        ...state,
        items: {
            ...cards
        }
    };
}

function favoritesLocationAdd(state, location) {
    return {
        ...state,
        locationItems: {
            ...state.items,
            [location.id]: location,
        }
    };
}

function favoritesLocationDelete(state, locationId) {
    const newItems = { ...state.items };
    delete newItems[locationId];
    return {
        ...state,
        locationItems: newItems
    };
}

function getFavoritesLocationList(state, locations) {
    return {
        ...state,
        locationItems: {
            ...locations
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
            return getFavoritesCardList(state, action.payload.cards);
        case FAVORITES_LOCATION_ADD:
            return favoritesLocationAdd(state, action.payload.location);
        case FAVORITES_LOCATION_DELETE:
            return favoritesLocationDelete(state, action.payload.locationId);
        case FAVORITES_LOCATION_GET_LIST:
            return getFavoritesLocationList(state, action.payload.locations);
        default:
            return state;
    }
};
