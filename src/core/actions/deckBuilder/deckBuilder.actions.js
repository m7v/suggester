import { batchActions } from 'redux-batched-actions';
import uniqueId from 'lodash/uniqueId';
import map from 'lodash/map';
import * as deckBuilderTypes from './deckBuilder.types';
import * as appContextTypes from '../../../core/actions/appContext/appContext.types';
import {
    buildDeck,
} from './deckBuilder.helper';
import {
    getCardList as requestGetCardList,
    getCardById as requestGetCardById,
    getDeckById as requestGetDeckById,
    getDeckList as requestGetDeckList,
    saveDeck as requestSaveDeck,
    removeDeck as requestRemoveDeck,
    getCardByIds as requestGetCardByIds,
    getCardsByDeckId as requestGetCardsByDeckId,
} from '../../services/deckBuilder/deckBuilder.service';
import {
    getDeckListByCardNames as requestGetDeckListByCardNames,
} from '../../services/mtgApi/mtgApi.service';

/**
 * @param {Array} cardList
 * @param {String} name
 * @param {String} currentDeckId
 * @return {function(*, *)}
 */
export function getDeckListByCardNames(cardList, name = 'newDeck', currentDeckId = null) {
    return (dispatch) => {
        const deckId = currentDeckId || uniqueId(`deck${(new Date()).getTime()}`);

        dispatch(appContextTypes.appDecksRequestStarted());

        return requestGetDeckListByCardNames(cardList)
            .then(cards => {
                const deck = buildDeck(deckId, name, cards);
                requestSaveDeck(deck);
                dispatch(batchActions([
                    deckBuilderTypes.createDeck(deck),
                    ...cards.map(card => deckBuilderTypes.addCard(card, deckId)),
                    appContextTypes.appDecksRequestSuccess(),
                ]));
            })
            .catch((e) => dispatch(appContextTypes.appDecksRequestFailed(e.message)));
    };
}

export function removeDeck(deckId) {
    return dispatch => {
        requestRemoveDeck(deckId);
        dispatch(deckBuilderTypes.deleteDeck(deckId));
    };
}

/**
 * @returns {function(*)}Success
 */
export function getDeckList() {
    return dispatch => {
        dispatch(appContextTypes.appDecksRequestStarted());

        return requestGetDeckList()
            .then((decks) => {
                dispatch(
                    batchActions([
                        ...map(decks, deck => deckBuilderTypes.createDeck(deck)),
                        appContextTypes.appDecksRequestSuccess(),
                    ]),
                );
            })
            .catch((e) => dispatch(appContextTypes.appDecksRequestFailed(e.message)));
    };
}

/**
 * @returns {function(*)}Success
 */
export function getCardListByDeckId(deckId) {
    return (dispatch, getState) => {
        dispatch(appContextTypes.appDecksRequestStarted());

        return requestGetCardsByDeckId(deckId)
            .then((cardIds) => {
                requestGetCardByIds(cardIds)
                    .then(cards => {
                        dispatch(batchActions([
                            ...map(cards, card => deckBuilderTypes.addCard(card, deckId)),
                            appContextTypes.appDecksRequestSuccess(),
                        ]));
                    });
            })
            .catch((e) => dispatch(appContextTypes.appDecksRequestFailed(e.message)));
    };
}

export function getDeckById(deckId) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(appContextTypes.appDecksRequestStarted());

        if (state.entities.Deck.itemsById[deckId]) {
            return dispatch(appContextTypes.appDecksRequestSuccess());
        }

        return requestGetDeckById(deckId)
            .then((deck) => {
                dispatch(
                    batchActions([
                        deckBuilderTypes.createDeck(deck),
                        appContextTypes.appDecksRequestSuccess(),
                    ]),
                );
            })
            .catch((e) => dispatch(appContextTypes.appDecksRequestFailed(e.message)));
    };
}

export function getCardList() {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(appContextTypes.appCardsRequestStarted());

        if (state.entities.Card.items.length >= 200) {
            return dispatch(appContextTypes.appCardsRequestSuccess());
        }

        return requestGetCardList()
            .then(cards => {
                dispatch(batchActions([
                    ...map(cards, card => deckBuilderTypes.addCard(card)),
                    appContextTypes.appCardsRequestSuccess()
                ]));
            })
            .catch((e) => dispatch(appContextTypes.appCardsRequestFailed(e)));
    };
}

export function getCardById(cardId) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(appContextTypes.appCardsRequestStarted());

        if (state.entities.Card.itemsById[cardId]) {
            return dispatch(appContextTypes.appCardsRequestSuccess());
        }

        return requestGetCardById(cardId)
            .then(card => {
                dispatch(batchActions([
                    deckBuilderTypes.addCard(card),
                    appContextTypes.appCardsRequestSuccess()
                ]));
            })
            .catch((e) => dispatch(appContextTypes.appCardsRequestFailed(e)));
    };
}
