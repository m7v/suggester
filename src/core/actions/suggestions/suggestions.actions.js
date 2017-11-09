import { batchActions } from 'redux-batched-actions';
import uniqBy from 'lodash/uniqBy';
import * as types from './suggestions.types';
import {
    buildDoubleFaceCards,
    fullCardsInfoLens,
    DOUBLE_FACED_TYPE
} from '../../helpers/mtgCard.helper';
import {
    getSuggestions as requestGetSuggestions,
    getCardsByNames as requestGetCardsByNames,
} from '../../services/mtgApi/mtgApi.service';

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
                const doubleFacedCards = suggestions.filter((suggestion) => suggestion.layout === DOUBLE_FACED_TYPE);

                const needToSearchCards = doubleFacedCards.map(card => {
                    const [searched] = card.names.filter(name => name !== card.name);
                    return {
                        id: card.id,
                        doubleName: searched
                    };
                });
                const getFullCardsInfo = fullCardsInfoLens(needToSearchCards);
                const shortDoubleFaceInfo = getFullCardsInfo(doubleFacedCards);

                if (needToSearchCards.length) {
                    return requestGetCardsByNames(needToSearchCards)
                        .then((searchedDoubleFacedCards) => {
                            const unitedDFcards = {
                                ...shortDoubleFaceInfo,
                                ...getFullCardsInfo(searchedDoubleFacedCards),
                            };

                            const compositions = buildDoubleFaceCards(suggestions, unitedDFcards);

                            return dispatch(batchActions([
                                types.setQueryString(query.toLowerCase()),
                                types.cachedSuggestions(query.toLowerCase(), compositions),
                                types.getSuggestions(compositions),
                                types.suggestionsRequestSuccess()
                            ]));
                        })
                        .catch((e) => dispatch(types.suggestionsRequestFailed(e.message)));
                }
                const compositions = buildDoubleFaceCards(suggestions, shortDoubleFaceInfo);

                return dispatch(batchActions([
                    types.setQueryString(query.toLowerCase()),
                    types.cachedSuggestions(query.toLowerCase(), compositions),
                    types.getSuggestions(compositions),
                    types.suggestionsRequestSuccess()
                ]));
            })
            .catch((e) => dispatch(types.suggestionsRequestFailed(e.message)));
    };
}

export function setQueryString(query) {
    return dispatch => dispatch(types.setQueryString(query.toLowerCase()));
}
