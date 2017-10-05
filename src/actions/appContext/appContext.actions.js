import * as types from './appContext.types';

/**
 * @returns {function(*)}Success
 */
export function appInitialized() {
    return dispatch => dispatch(types.appInitialized());
}
