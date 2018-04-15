import {
    FAVORITES_CARD_REQUEST_SUCCESS,
    FAVORITES_CARD_REQUEST_STARTED,
    FAVORITES_CARD_REQUEST_FAILED,
    FAVORITES_CARD_ADD,
    FAVORITES_CARD_DELETE,
    FAVORITES_CARD_GET_LIST,

    FAVORITES_LOCATION_ADD,
    FAVORITES_LOCATION_DELETE,
    FAVORITES_LOCATION_GET_LIST,
} from '../../../core/reducers/favorites/favorites.helper';

export function favoritesCardRequestSuccess() {
    return {
        type: FAVORITES_CARD_REQUEST_SUCCESS,
        payload: {},
        meta: {}
    };
}
export function favoritesCardRequestStarted() {
    return {
        type: FAVORITES_CARD_REQUEST_STARTED,
        payload: {},
        meta: {}
    };
}
export function favoritesCardRequestFailed() {
    return {
        type: FAVORITES_CARD_REQUEST_FAILED,
        payload: {},
        meta: {}
    };
}
export function favoritesCardAdd(card) {
    return {
        type: FAVORITES_CARD_ADD,
        payload: {card},
        meta: {}
    };
}
export function favoritesCardDelete(cardId) {
    return {
        type: FAVORITES_CARD_DELETE,
        payload: {cardId},
        meta: {}
    };
}
export function getFavoritesCardList(cards) {
    return {
        type: FAVORITES_CARD_GET_LIST,
        payload: {cards},
        meta: {}
    };
}

export function favoritesLocationAdd(location) {
    return {
        type: FAVORITES_LOCATION_ADD,
        payload: {location},
        meta: {}
    };
}
export function favoritesLocationDelete(locationId) {
    return {
        type: FAVORITES_LOCATION_DELETE,
        payload: {locationId},
        meta: {}
    };
}
export function getFavoritesLocationList(locations) {
    return {
        type: FAVORITES_LOCATION_GET_LIST,
        payload: {locations},
        meta: {}
    };
}
