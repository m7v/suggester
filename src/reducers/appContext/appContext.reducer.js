import {
    APP_CONTEXT_INITIALIZED
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

/**
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = {}, action) => {
    switch (action.type) {
        case APP_CONTEXT_INITIALIZED:
            return appInitialized(state);
        default:
            return state;
    }
};
