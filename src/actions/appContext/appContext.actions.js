import * as types from './appContext.types';

/**
 * @returns {function(*)}Success
 */
export function appInitialized() {
    return dispatch => dispatch(types.appInitialized());
}

export function appSetColorFilter(colors) {
    return dispatch => dispatch(types.appSetColorFilter(colors));
}

export function appSetTypeFilter(cardTypes) {
    return dispatch => dispatch(types.appSetTypeFilter(cardTypes));
}


export function appSetRarityFilter(cardRarity) {
    return dispatch => dispatch(types.appSetRarityFilter(cardRarity));
}

export function appSetCardSetColorFilter(colors) {
    return dispatch => dispatch(types.appSetCardSetColorFilter(colors));
}

export function appSetCardSetTypeFilter(cardTypes) {
    return dispatch => dispatch(types.appSetCardSetTypeFilter(cardTypes));
}

export function appSetCardSetRarityFilter(cardRarity) {
    return dispatch => dispatch(types.appSetCardSetRarityFilter(cardRarity));
}

export function appSetFavoritesColorFilter(colors) {
    return dispatch => dispatch(types.appSetFavoritesColorFilter(colors));
}

export function appSetFavoritesTypeFilter(cardTypes) {
    return dispatch => dispatch(types.appSetFavoritesTypeFilter(cardTypes));
}

export function appSetFavoritesRarityFilter(cardRarity) {
    return dispatch => dispatch(types.appSetFavoritesRarityFilter(cardRarity));
}
