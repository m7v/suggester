import * as types from './appContext.types';

/**
 * @returns {function(*)}Success
 */
export function appInitialized() {
    return dispatch => dispatch(types.appInitialized());
}

export function appSetColorFilter(colors) {
    return dispath => dispath(types.appSetColorFilter(colors));
}

export function appSetTypeFilter(cardTypes) {
    return dispath => dispath(types.appSetTypeFilter(cardTypes));
}


export function appSetCardSetColorFilter(colors) {
    return dispath => dispath(types.appSetCardSetColorFilter(colors));
}

export function appSetCardSetTypeFilter(cardTypes) {
    return dispath => dispath(types.appSetCardSetTypeFilter(cardTypes));
}
