import { batchActions } from 'redux-batched-actions';
import uniqBy from 'lodash/uniqBy';
import * as types from './suggestions.types';
import {
    getSuggestions as requestGetSuggestions
} from '../../services/suggestions/suggestions.service';

/**
 * @returns {function(*, *)}Success
 */
export function getSuggestions(query) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(types.suggestionsRequestStarted());

        if (state.suggester.latestQuery[query.toLowerCase()]) {
            return dispatch(batchActions([
                types.setQueryString(query.toLowerCase()),
                types.getSuggestions(state.suggester.latestQuery[query.toLowerCase()]),
                types.suggestionsRequestSuccess()
            ]));
        }

        return requestGetSuggestions(query)
            .then((cards) => {
                const suggestions = uniqBy(cards, 'name');
                dispatch(batchActions([
                    types.setQueryString(query.toLowerCase()),
                    types.cachedSuggestions(query.toLowerCase(), suggestions),
                    types.getSuggestions(suggestions),
                    types.suggestionsRequestSuccess()
                ]));
            })
            .catch((e) => dispatch(types.suggestionsRequestFailed(e.message)));
    };
}

export function setQueryString(query) {
    return dispatch => dispatch(types.setQueryString(query.toLowerCase()));
}
