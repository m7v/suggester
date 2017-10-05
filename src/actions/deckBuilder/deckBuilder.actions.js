import { batchActions } from 'redux-batched-actions';
import { uniqueId, map } from 'lodash';
import * as types from './deckBuilder.types';
import {
    buildDeck,
} from './deckBuilder.helper';
import {
    getCardList as requestGetCardList,
    getDeckList as requestGetDeckList,
    getCardByIds as requestGetCardByIds,
    getCardsByDeckId as requestGetCardsByDeckId,
    getDeckListByCardNames as requestGetDeckListByCardNames,
} from '../../services/deckBuilder/deckBuilder.service';

/**
 * @param {Array} cardList
 * @param {String} name
 * @return {function(*, *)}
 */
export function getDeckListByCardNames(cardList, name = 'newDeck') {
    return (dispatch, getState) => {
        const deckId = uniqueId(`deck${(new Date()).getTime()}`);

        dispatch(types.deckBuilderRequestStarted(deckId));

        return requestGetDeckListByCardNames(cardList, getState())
            .then(cards => {
                const deck = buildDeck(deckId, name, cards);

                dispatch(batchActions([
                    types.createDeck(deck),
                    ...cards.map(card => types.addCard(card, deckId)),
                    types.deckBuilderRequestSuccess(deckId),
                ]));
            });
    };
}

export function removeDeck(deckId) {
    return dispatch => {
        dispatch(types.deleteDeck(deckId));
    };
}

/**
 * @returns {function(*)}Success
 */
export function getDeckList() {
    return dispatch => {
        dispatch(types.deckBuilderRequestStarted(0));

        return requestGetDeckList()
            .then((decks) => {
                dispatch(
                    batchActions([
                        ...map(decks, deck => types.createDeck(deck)),
                        types.deckBuilderRequestSuccess(0),
                    ]),
                );
            })
            .catch(() => {
                dispatch(types.deckBuilderRequestFailed(0));
            });
    };
}

/**
 * @returns {function(*)}Success
 */
export function getCardListByDeckId(deckId) {
    return (dispatch, getState) => {
        dispatch(types.deckBuilderRequestStarted(deckId));

        return requestGetCardsByDeckId(deckId)
            .then((cardIds) => {
                requestGetCardByIds(cardIds, getState())
                    .then(cards => {
                        dispatch(batchActions([
                            ...map(cards, card => types.addCard(card, deckId)),
                            types.deckBuilderRequestSuccess(deckId),
                        ]));
                    });
            })
            .catch(() => {
                dispatch(types.deckBuilderRequestFailed(deckId));
            });
    };
}

export function getCardList() {
    return dispatch => requestGetCardList()
        .then(cards => {
            dispatch(batchActions([
                ...map(cards, card => types.addCard(card))
            ]));
        })
        .catch((e) => {
            console.log(e);
        });
}
