import {
    APP_CONTEXT_INITIALIZED
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
