import {batchActions} from 'redux-batched-actions';
import {uniqueId} from 'lodash';
import * as types from './deckBuilder.types';
import {
    buildDeck,
} from './deckBuilder.helper';
import {
    getCardList as requestGetCardList,
    getDeckList as requestGetDeckList,
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
                    types.getCardList(cards),
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
