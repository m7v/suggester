import {
    GET_SUGGESTIONS
} from '../../reducers/suggestions/suggestions.helper';

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
