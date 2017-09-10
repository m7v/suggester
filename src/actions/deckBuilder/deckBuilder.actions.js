import {batchActions} from 'redux-batched-actions';
import {uniqueId, size, head} from 'lodash';
import * as types from './deckBuilder.types';
import {
    getCardList as requestGetCardList,
    getDeckList as requestGetDeckList,
    getDeckListByCardNames as requestGetDeckListByCardNames,
} from '../../services/deckBuilder/deckBuilder.service';

/**
 * @param {Array} cardList
 * @param {String} name
 * @return {function(*)}
 */
export function getDeckListByCardNames(cardList, name = 'newDeck') {
    return dispatch => {
        const deckId = uniqueId('deck2');

        dispatch(types.deckBuilderRequestStarted(deckId));

        return requestGetDeckListByCardNames(cardList)
            .then(cards => {
                const deck = {
                    id: deckId,
                    headliner: head(cards).imageUrl,
                    name,
                    cardCount: cards.reduce((count, card) => Number(card.count) + count, 0),
                    analytics: {
                        colorComposition: cards.reduce((composition, card) =>
                            size(card.colors) ? card.colors.reduce((comp, color) => {
                                const colorLowerCase = color.toLowerCase();
                                comp[colorLowerCase]
                                    ? comp[colorLowerCase] += card.count
                                    : comp[colorLowerCase] = card.count;
                                return comp;
                            }, composition) : composition, {}),
                        cardRarity: cards.reduce((rarity, card) => {
                            const rarityLowerCase = card.rarity.toLowerCase();
                            rarity[rarityLowerCase]
                                ? rarity[rarityLowerCase] += card.count
                                : rarity[rarityLowerCase] = card.count;
                            return rarity;
                        }, {}),
                        manaCurve: cards.reduce((cmc, card) => {
                            card.cmc = card.cmc || 0;
                            cmc[card.cmc]
                                ? cmc[card.cmc] += card.count
                                : cmc[card.cmc] = card.count;
                            return cmc;
                        }, {}),
                        deckComposition: cards.reduce((composition, card) =>
                                card.types.reduce((comp, type) => {
                                    const typeLowerCase = type.toLowerCase();
                                    comp[typeLowerCase]
                                        ? comp[typeLowerCase] += card.count
                                        : comp[typeLowerCase] = card.count;
                                    return comp;
                                }, composition),
                            {}),
                    },
                };

                const cardDispatches = cards.map(card => ({
                    type: 'DECK_BUILDER/DECK/ADD_CARD',
                    payload: {
                        deckId,
                        card,
                    },
                }));

                dispatch(batchActions([
                    types.getCardList(cards),
                    types.createDeck(deck),
                    ...cardDispatches,
                    types.deckBuilderRequestSuccess(deckId),
                ]));
            });
    };
}

/**
 * @returns {function(*)}Success
 */
export function getDeckList() {
    return dispatch => {
        dispatch(types.deckBuilderRequestStarted());

        return requestGetDeckList()
            .then(() => {
                const decks = [];
                dispatch(batchActions([
                    types.getDeckList(decks),
                    types.deckBuilderRequestSuccess(),
                ]));
            })
            .catch(() => {
                dispatch(types.deckBuilderRequestFailed());
            });
    };
}

/**
 * @returns {function(*)}Success
 */
export function getCardList() {
    return dispatch => {
        dispatch(types.deckBuilderRequestStarted());

        return requestGetCardList()
            .then(() => {
                const decks = [];
                dispatch(batchActions([
                    types.getCardList(decks),
                    types.deckBuilderRequestSuccess(),
                ]));
            })
            .catch(() => {
                dispatch(types.deckBuilderRequestFailed());
            });
    };
}
