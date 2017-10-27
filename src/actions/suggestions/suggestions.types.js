import {
    GET_SUGGESTIONS,
    CACHED_SUGGESTIONS,
    SUGGESTIONS_QUERY_SET,
    SUGGESTIONS_REQUEST_STARTED,
    SUGGESTIONS_REQUEST_SUCCESS,
    SUGGESTIONS_REQUEST_FAILED
} from 'reducers/suggester/suggester.helper';

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
 * @param searchQuery
 * @param suggestions
 * @returns {{type, photoList: *}}
 */
export function cachedSuggestions(searchQuery, suggestions) {
    return {
        type: CACHED_SUGGESTIONS,
        payload: {
            searchQuery,
            suggestions
        },
        meta: {}
    };
}
/**
 * @param searchQuery
 * @returns {{type, photoList: *}}
 */
export function setQueryString(searchQuery) {
    return {
        type: SUGGESTIONS_QUERY_SET,
        payload: {
            searchQuery,
        },
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
export function suggestionsRequestFailed(error) {
    return {
        type: SUGGESTIONS_REQUEST_FAILED,
        payload: {error},
        meta: {}
    };
}
