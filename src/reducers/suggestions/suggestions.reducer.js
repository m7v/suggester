import {Map} from 'immutable';
import {
    GET_SUGGESTIONS
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
 * @param action
 * @returns {*}
 */
export default (state = new Map({}), action) => {
    switch (action.type) {
        case GET_SUGGESTIONS:
            return getSuggestions(state, action.payload.suggestions);
        default:
            return state;
    }
};
