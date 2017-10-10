import { batchActions } from 'redux-batched-actions';
import uniqBy from 'lodash/uniqBy';
import findIndex from 'lodash/findIndex';
import * as types from './suggestions.types';
import {
    getSuggestions as requestGetSuggestions,
    getCardsByNames as requestGetCardsByNames,
} from '../../services/suggestions/suggestions.service';

const DOUBLE_FACED_TYPE = 'double-faced';

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
                // @TODO Algorithm #1. Need to optimize.
                const shortDoubleFaceInfo = doubleFacedCards.reduce((mapping, card) => {
                    const [searchCard] = needToSearchCards
                        .filter(searchedCard => card.name === searchedCard.doubleName);

                    if (searchCard) {
                        mapping[searchCard.id] = {
                            id: card.id,
                            name: card.name,
                            imageUrl: card.imageUrl
                        };
                        needToSearchCards.splice(findIndex(needToSearchCards, (c) => card.name === c.doubleName), 1);
                    }
                    return mapping;
                }, {});

                if (needToSearchCards.length) {
                    return requestGetCardsByNames(needToSearchCards)
                        .then((searchedDoubleFacedCards) => {
                            // @TODO Duplicate of Algorithm #1
                            const shortSearchedDoubleFaceInfo = searchedDoubleFacedCards.reduce((mapping, card) => {
                                const [searchCard] = needToSearchCards
                                    .filter(searchedCard => card.name === searchedCard.doubleName);

                                if (searchCard) {
                                    mapping[searchCard.id] = {
                                        id: card.id,
                                        name: card.name,
                                        imageUrl: card.imageUrl
                                    };
                                    needToSearchCards
                                        .splice(findIndex(needToSearchCards, (c) => card.name === c.doubleName), 1);
                                }
                                return mapping;
                            }, {});

                            const unitedDFcards = {
                                ...shortDoubleFaceInfo,
                                ...shortSearchedDoubleFaceInfo,
                            };

                            // @TODO Duplicate #2 of ended processing.
                            const compositions = suggestions.map(suggest => {
                                if (unitedDFcards[suggest.id]) {
                                    return {
                                        ...suggest,
                                        doubleFace: unitedDFcards[suggest.id]
                                    };
                                }
                                return {
                                    ...suggest
                                };
                            });

                            return dispatch(batchActions([
                                types.setQueryString(query.toLowerCase()),
                                types.cachedSuggestions(query.toLowerCase(), compositions),
                                types.getSuggestions(compositions),
                                types.suggestionsRequestSuccess()
                            ]));
                        });
                }
                // @TODO Duplicate #2 of ended processing.
                const compositions = suggestions.map(suggest => {
                    if (shortDoubleFaceInfo[suggest.id]) {
                        return {
                            ...suggest,
                            doubleFace: shortDoubleFaceInfo[suggest.id]
                        };
                    }
                    return {
                        ...suggest
                    };
                });

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
