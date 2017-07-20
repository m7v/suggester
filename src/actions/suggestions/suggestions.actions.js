import { batchActions } from 'redux-batched-actions';
import * as types from './suggestions.types';
import {
    getSuggestions as requestGetSuggestions
} from '../../services/suggestions/suggestions.service';

/**
 * @returns {function(*)}Success
 */
export function getSuggestions(query) {
    return dispatch => {
        dispatch(types.suggestionsRequestStarted());

        return requestGetSuggestions(query)
            .then((response) => {
                const cards = response.cards;
                const suggestions = cards.reduce((pool, card) => {
                    if (!card.imageUrl) {
                        return pool;
                    }
                    pool.push({
                        id: card.multiverseid,
                        name: card.name,
                        imageUrl: card.imageUrl
                    });
                    return pool;
                }, []);
                dispatch(batchActions([
                    types.getSuggestions(suggestions),
                    types.suggestionsRequestSuccess()
                ]));
            })
            .catch(() => {
                dispatch(types.suggestionsRequestFailed());
            });
    };
}
