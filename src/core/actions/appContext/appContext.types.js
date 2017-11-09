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
    APP_CARD_ADD_INFO,
    APP_CARDSETS_REQUEST_STARTED,
    APP_CARDSETS_REQUEST_SUCCESS,
    APP_CARDSETS_REQUEST_FAILED,
    APP_SET_CARDS_COLORS_FILTERS,
    APP_SET_CARDS_TYPES_FILTERS,
    APP_SET_CARDS_RARITY_FILTERS,
    APP_SET_CARDSET_COLORS_FILTERS,
    APP_SET_CARDSET_RARITY_FILTERS,
    APP_SET_CARDSET_TYPES_FILTERS,
    APP_SET_FAVORITES_COLORS_FILTERS,
    APP_SET_FAVORITES_RARITY_FILTERS,
    APP_SET_FAVORITES_TYPES_FILTERS
} from '../../../core/reducers/appContext/appContext.helper';

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

export function appAddCardInfo(card) {
    return {
        type: APP_CARD_ADD_INFO,
        payload: {card},
        meta: {}
    };
}

export function appCardSetsRequestStarted() {
    return {
        type: APP_CARDSETS_REQUEST_STARTED,
        payload: {},
        meta: {}
    };
}
export function appCardSetsRequestSuccess() {
    return {
        type: APP_CARDSETS_REQUEST_SUCCESS,
        payload: {},
        meta: {}
    };
}
export function appCardSetsRequestFailed(error) {
    return {
        type: APP_CARDSETS_REQUEST_FAILED,
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

export function appSetRarityFilter(rarity) {
    return {
        type: APP_SET_CARDS_RARITY_FILTERS,
        payload: {rarity},
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

export function appSetCardSetColorFilter(colors) {
    return {
        type: APP_SET_CARDSET_COLORS_FILTERS,
        payload: {colors},
        meta: {}
    };
}

export function appSetCardSetTypeFilter(types) {
    return {
        type: APP_SET_CARDSET_TYPES_FILTERS,
        payload: {types},
        meta: {}
    };
}

export function appSetCardSetRarityFilter(rarity) {
    return {
        type: APP_SET_CARDSET_RARITY_FILTERS,
        payload: {rarity},
        meta: {}
    };
}

export function appSetFavoritesColorFilter(colors) {
    return {
        type: APP_SET_FAVORITES_COLORS_FILTERS,
        payload: {colors},
        meta: {}
    };
}

export function appSetFavoritesTypeFilter(types) {
    return {
        type: APP_SET_FAVORITES_TYPES_FILTERS,
        payload: {types},
        meta: {}
    };
}

export function appSetFavoritesRarityFilter(rarity) {
    return {
        type: APP_SET_FAVORITES_RARITY_FILTERS,
        payload: {rarity},
        meta: {}
    };
}
