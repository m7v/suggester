import {Map} from 'immutable';
import {
    GET_SUGGESTIONS,
    SUGGESTIONS_REQUEST_STARTED,
    SUGGESTIONS_REQUEST_SUCCESS,
    SUGGESTIONS_REQUEST_FAILED
} from './suggestions.helper';

/**
 * @param state
 * @param suggestions
 */
function getSuggestions(state, suggestions) {
    return state.set('suggestions', suggestions);
}

/**
 * @param state
 */
function suggestionsRequestStarted(state) {
    return state.setIn(['meta', 'loading'], true);
}

/**
 * @param state
 */
function suggestionsRequestSuccess(state) {
    return state.set('meta', new Map({
        loading: false,
        error: false
    }));
}

/**
 * @param state
 */
function suggestionsRequestFailed(state) {
    return state.set('meta', new Map({
        loading: false,
        error: true
    }));
}

/**
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = new Map({}), action) => {
    switch (action.type) {
        case GET_SUGGESTIONS:
            return getSuggestions(state, action.payload.suggestions);
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
