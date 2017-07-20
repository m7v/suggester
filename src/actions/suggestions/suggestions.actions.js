import { batchActions } from 'redux-batched-actions';
import * as types from './suggestions.types';
import {
    getSuggestions as requestGetSuggestions
} from '../../services/suggestions/suggestions.service';

/**
 * @returns {function(*)}Success
 */
export function getSuggestions(query) {
    return dispatch => requestGetSuggestions(query)
        .then((response) => {
            const items = response.result.items;
            const suggestions = items.map(item => {
                const adm = (item.adm_div && item.adm_div.length) && `${item.adm_div[0].name}-${item.adm_div[0].type}`;
                return `${item.caption} | ${item.type || item.subtype} [${adm}]`;
            });
            dispatch(batchActions([
                types.getSuggestions(suggestions),
            ]));
        })
        .catch(() => {
        });
}
