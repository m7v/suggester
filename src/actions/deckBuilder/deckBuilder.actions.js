import { batchActions } from 'redux-batched-actions';
import { uniqueId } from 'lodash';
import * as types from './deckBuilder.types';
import {
    getCardList as requestGetCardList,
    getDeckList as requestGetDeckList,
    getDeckListByCardNames as requestGetDeckListByCardNames,
} from '../../services/deckBuilder/deckBuilder.service';

/**
 * @param {Array} cardList
 * @return {function(*)}
 */
export function getDeckListByCardNames(cardList, name = 'newDeck') {
    return dispatch => {
        const deckId = uniqueId('deck');
        dispatch(types.deckBuilderRequestStarted(deckId));

        return requestGetDeckListByCardNames(cardList)
            .then(cards => {
                const deck = {
                    id: deckId,
                    name,
                    cards,
                    cardCount: cards.reduce((count, card) => Number(card.count) + count, 0),
                    analytics: {
                        manaRadian: {
                            white: 1,
                            red: 1,
                            green: 2,
                            black: 3,
                            blue: 2
                        },
                        manaCurve: {
                            0: 0,
                            1: 4,
                            2: 6,
                            3: 5,
                            5: 6,
                            6: 8
                        },
                        deckComposition: {
                            instant: 5,
                            sorcery: 10,
                            enchantment: 2,
                            artifact: 4,
                            creatures: 15,
                            planeswalker: 1
                        }
                    }
                };
                dispatch(batchActions([
                    types.getCardList(cards),
                    types.createDeck(deck),
                    types.deckBuilderRequestSuccess(deckId)
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
                    types.deckBuilderRequestSuccess()
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
                    types.deckBuilderRequestSuccess()
                ]));
            })
            .catch(() => {
                dispatch(types.deckBuilderRequestFailed());
            });
    };
}
