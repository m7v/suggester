import {
    APP_CONTEXT_INITIALIZED,
    APP_CARDS_REQUEST_STARTED,
    APP_CARDS_REQUEST_FAILED,
    APP_CARDS_REQUEST_SUCCESS,
    APP_DECKS_REQUEST_STARTED,
    APP_DECKS_REQUEST_SUCCESS,
    APP_DECKS_REQUEST_FAILED,
    APP_FAVORITES_REQUEST_STARTED,
    APP_FAVORITES_REQUEST_SUCCESS,
    APP_FAVORITES_REQUEST_FAILED,
    APP_SET_CARDS_COLORS_FILTERS,
    APP_SET_CARDS_TYPES_FILTERS,
} from '../../reducers/appContext/appContext.helper';

/**
 * @param suggestions
 * @returns {{type, photoList: *}}
 */
export function appInitialized() {
    return {
        type: APP_CONTEXT_INITIALIZED,
        payload: {},
        meta: {}
    };
}

export function appCardsRequestStarted() {
    return {
        type: APP_CARDS_REQUEST_STARTED,
        payload: {},
        meta: {}
    };
}
export function appCardsRequestFailed() {
    return {
        type: APP_CARDS_REQUEST_FAILED,
        payload: {},
        meta: {}
    };
}
export function appCardsRequestSuccess() {
    return {
        type: APP_CARDS_REQUEST_SUCCESS,
        payload: {},
        meta: {}
    };
}
export function appDecksRequestStarted() {
    return {
        type: APP_DECKS_REQUEST_STARTED,
        payload: {},
        meta: {}
    };
}
export function appDecksRequestSuccess() {
    return {
        type: APP_DECKS_REQUEST_SUCCESS,
        payload: {},
        meta: {}
    };
}
export function appDecksRequestFailed(error) {
    return {
        type: APP_DECKS_REQUEST_FAILED,
        payload: {error},
        meta: {}
    };
}
export function appFavoritesRequestStarted() {
    return {
        type: APP_FAVORITES_REQUEST_STARTED,
        payload: {},
        meta: {}
    };
}
export function appFavoritesRequestSuccess() {
    return {
        type: APP_FAVORITES_REQUEST_SUCCESS,
        payload: {},
        meta: {}
    };
}
export function appFavoritesRequestFailed() {
    return {
        type: APP_FAVORITES_REQUEST_FAILED,
        payload: {},
        meta: {}
    };
}

export function appSetColorFilter(colors) {
    return {
        type: APP_SET_CARDS_COLORS_FILTERS,
        payload: {colors},
        meta: {}
    };
}

export function appSetTypeFilter(types) {
    return {
        type: APP_SET_CARDS_TYPES_FILTERS,
        payload: {types},
        meta: {}
    };
}