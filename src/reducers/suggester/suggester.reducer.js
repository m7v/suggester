import {
    GET_SUGGESTIONS,
    CACHED_SUGGESTIONS,
    SUGGESTIONS_REQUEST_STARTED,
    SUGGESTIONS_REQUEST_SUCCESS,
    SUGGESTIONS_REQUEST_FAILED
} from './suggester.helper';

/**
 * @param state
 * @param suggestions
 */
function getSuggestions(state, suggestions) {
    return {
        ...state,
        suggestions
    };
}

/**
 * @param state
 * @param searchQuery
 * @param suggestions
 */
function cachedSuggestions(state, searchQuery, suggestions) {
    return {
        ...state,
        latestQuery: {
            ...state.latestQuery,
            [searchQuery]: suggestions
        }
    };
}

/**
 * @param state
 */
function suggestionsRequestStarted(state) {
    return {
        ...state,
        meta: {
            ...state.meta,
            loading: true
        }
    };
}

/**
 * @param state
 */
function suggestionsRequestSuccess(state) {
    return {
        ...state,
        meta: {
            ...state.meta,
            loading: false,
            error: false
        }
    };
}

/**
 * @param state
 */
function suggestionsRequestFailed(state) {
    return {
        ...state,
        meta: {
            ...state.meta,
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
        case GET_SUGGESTIONS:
            return getSuggestions(state, action.payload.suggestions);
        case CACHED_SUGGESTIONS:
            return cachedSuggestions(state, action.payload.searchQuery, action.payload.suggestions);
        case SUGGESTIONS_REQUEST_STARTED:
            return suggestionsRequestStarted(state);
        case SUGGESTIONS_REQUEST_SUCCESS:
            return suggestionsRequestSuccess(state);
        case SUGGESTIONS_REQUEST_FAILED:
            return suggestionsRequestFailed(state);
        default:
            return state;
    }
};
