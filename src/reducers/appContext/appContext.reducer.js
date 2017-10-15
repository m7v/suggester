import {
    APP_CONTEXT_INITIALIZED,
    APP_SET_CARDS_COLORS_FILTERS,
    APP_SET_CARDS_TYPES_FILTERS,
    APP_SET_CARDSET_COLORS_FILTERS,
    APP_SET_CARDSET_TYPES_FILTERS,
    APP_CARDS_REQUEST_STARTED,
    APP_CARDS_REQUEST_FAILED,
    APP_CARDS_REQUEST_SUCCESS,
    APP_DECKS_REQUEST_STARTED,
    APP_DECKS_REQUEST_SUCCESS,
    APP_DECKS_REQUEST_FAILED,
    APP_FAVORITES_REQUEST_STARTED,
    APP_FAVORITES_REQUEST_SUCCESS,
    APP_FAVORITES_REQUEST_FAILED,
    APP_CARD_ADD_INFO,
    APP_CARDSET_ADD_CARDS,
    APP_CARDSETS_REQUEST_STARTED,
    APP_CARDSETS_REQUEST_SUCCESS,
    APP_CARDSETS_REQUEST_FAILED
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

function appSetCardSetColorFilter(state, colors) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            filters: {
                ...state.CardSets.filters,
                colors: {
                    ...state.CardSets.filters.colors,
                    ...colors
                }
            }
        }
    };
}

function appSetCardSetTypeFilter(state, types) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            filters: {
                ...state.CardSets.filters,
                types: {
                    ...state.CardSets.filters.types,
                    ...types
                }
            }
        }
    };
}

function appAddCardInfo(state, card) {
    return {
        ...state,
        CardInfo: {
            ...state.CardInfo,
            data: {
                ...state.CardInfo.data,
                [card.id]: {
                    ...state.CardInfo.data[card.id],
                    ...card
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

function appCardSetsRequestStarted(state) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            loading: true,
            error: false
        }
    };
}

function appCardSetsRequestSuccess(state) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            loading: false,
            error: false
        }
    };
}

function appCardSetsRequestFailed(state) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            loading: false,
            error: true
        }
    };
}

function appCardSetsAddCards(state, code, cards) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            data: {
                ...state.CardSets.data,
                [code]: cards
            }
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
        case APP_SET_CARDSET_COLORS_FILTERS:
            return appSetCardSetColorFilter(state, action.payload.colors);
        case APP_SET_CARDSET_TYPES_FILTERS:
            return appSetCardSetTypeFilter(state, action.payload.types);
        case APP_CARD_ADD_INFO:
            return appAddCardInfo(state, action.payload.card);
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
        case APP_CARDSETS_REQUEST_STARTED:
            return appCardSetsRequestStarted(state);
        case APP_CARDSETS_REQUEST_SUCCESS:
            return appCardSetsRequestSuccess(state);
        case APP_CARDSETS_REQUEST_FAILED:
            return appCardSetsRequestFailed(state);
        case APP_CARDSET_ADD_CARDS:
            return appCardSetsAddCards(state, action.payload.setCode, action.payload.cards);
        default:
            return state;
    }
};