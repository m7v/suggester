import {
    GET_SUGGESTIONS,
    SUGGESTIONS_REQUEST_STARTED,
    SUGGESTIONS_REQUEST_SUCCESS,
    SUGGESTIONS_REQUEST_FAILED
} from '../../reducers/suggester/suggester.helper';

/**
 * @param suggestions
 * @returns {{type, photoList: *}}
 */
export function getSuggestions(suggestions) {
    return {
        type: GET_SUGGESTIONS,
        payload: {suggestions},
        meta: {}
    };
}
/**
 * @returns {{type}}
 */
export function suggestionsRequestStarted() {
    return {
        type: SUGGESTIONS_REQUEST_STARTED,
        payload: {},
        meta: {}
    };
}

/**
 * @returns {{type}}
 */
export function suggestionsRequestSuccess() {
    return {
        type: SUGGESTIONS_REQUEST_SUCCESS,
        payload: {},
        meta: {}
    };
}

/**
 * @returns {{type}}
 */
export function suggestionsRequestFailed() {
    return {
        type: SUGGESTIONS_REQUEST_FAILED,
        payload: {},
        meta: {}
    };
}