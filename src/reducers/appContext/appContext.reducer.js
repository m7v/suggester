import {
    APP_CONTEXT_INITIALIZED,
    APP_SET_CARDS_COLORS_FILTERS,
    APP_SET_CARDS_TYPES_FILTERS,
    APP_CARDS_REQUEST_STARTED,
    APP_CARDS_REQUEST_FAILED,
    APP_CARDS_REQUEST_SUCCESS,
    APP_DECKS_REQUEST_STARTED,
    APP_DECKS_REQUEST_SUCCESS,
    APP_DECKS_REQUEST_FAILED,
    APP_FAVORITES_REQUEST_STARTED,
    APP_FAVORITES_REQUEST_SUCCESS,
    APP_FAVORITES_REQUEST_FAILED,
} from './appContext.helper';

/**
 * @param state
 */
function appInitialized(state) {
    return {
        ...state,
        initial: true
    };
}

function appSetColorFilter(state, colors) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            filters: {
                ...state.Cards.filters,
                colors: {
                    ...state.Cards.filters.colors,
                    ...colors
                }
            }
        }
    };
}

function appSetTypeFilter(state, types) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            filters: {
                ...state.Cards.filters,
                types: {
                    ...state.Cards.filters.types,
                    ...types
                }
            }
        }
    };
}

function appCardsRequestStarted(state) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            loading: true,
        }
    };
}

function appCardsRequestFailed(state) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            loading: false,
            error: true
        }
    };
}

function appCardsRequestSuccess(state) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            loading: false,
            error: false
        }
    };
}

function appDecksRequestStarted(state) {
    return {
        ...state,
        Decks: {
            ...state.Decks,
            loading: true,
        }
    };
}

function appDecksRequestSuccess(state) {
    return {
        ...state,
        Decks: {
            ...state.Decks,
            loading: false,
            error: false
        }
    };
}

function appDecksRequestFailed(state) {
    return {
        ...state,
        Decks: {
            ...state.Decks,
            loading: false,
            error: true
        }
    };
}

function appFavoritesRequestStarted(state) {
    return {
        ...state,
        Favorites: {
            ...state.Favorites,
            loading: true,
        }
    };
}

function appFavoritesRequestSuccess(state) {
    return {
        ...state,
        Favorites: {
            ...state.Favorites,
            loading: false,
            error: false
        }
    };
}

function appFavoritesRequestFailed(state) {
    return {
        ...state,
        Favorites: {
            ...state.Favorites,
            loading: false,
            error: true
        }
    };
}


/**
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = {}, action) => {
    switch (action.type) {
        case APP_CONTEXT_INITIALIZED:
            return appInitialized(state);
        case APP_SET_CARDS_COLORS_FILTERS:
            return appSetColorFilter(state, action.payload.colors);
        case APP_SET_CARDS_TYPES_FILTERS:
            return appSetTypeFilter(state, action.payload.types);
        case APP_CARDS_REQUEST_STARTED:
            return appCardsRequestStarted(state);
        case APP_CARDS_REQUEST_FAILED:
            return appCardsRequestFailed(state);
        case APP_CARDS_REQUEST_SUCCESS:
            return appCardsRequestSuccess(state);
        case APP_DECKS_REQUEST_STARTED:
            return appDecksRequestStarted(state);
        case APP_DECKS_REQUEST_SUCCESS:
            return appDecksRequestSuccess(state);
        case APP_DECKS_REQUEST_FAILED:
            return appDecksRequestFailed(state);
        case APP_FAVORITES_REQUEST_STARTED:
            return appFavoritesRequestStarted(state);
        case APP_FAVORITES_REQUEST_SUCCESS:
            return appFavoritesRequestSuccess(state);
        case APP_FAVORITES_REQUEST_FAILED:
            return appFavoritesRequestFailed(state);
        default:
            return state;
    }
};
