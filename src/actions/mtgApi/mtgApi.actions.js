import { batchActions } from 'redux-batched-actions';
import findIndex from 'lodash/findIndex';
import compact from 'lodash/compact';
import map from 'lodash/map';
import * as appContextTypes from './../appContext/appContext.types';
import * as mtgApiTypes from './../mtgApi/mtgApi.types';
import {
    getCardById as requestGetCardById,
    getCardsByNames as requestGetCardsByNames,
    getSetList as requestGetSetList,
    getSetCardsByCode as requestGetSetCardsByCode,
} from '../../services/mtgApi/mtgApi.service';

const DOUBLE_FACED_TYPE = 'double-faced';

export function getCardById(cardId) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(appContextTypes.appCardsRequestStarted());

        if (state.appContext.CardInfo.data[ cardId ]) {
            return dispatch(appContextTypes.appCardsRequestSuccess());
        }

        return requestGetCardById(cardId)
            .then(card => {
                if (card.layout === DOUBLE_FACED_TYPE) {
                    const needToSearchCards = [];
                    const [ searched ] = card.names.filter(name => name !== card.name);
                    needToSearchCards.push({
                        id: card.id,
                        doubleName: searched,
                    });
                    return requestGetCardsByNames(needToSearchCards)
                        .then((searchedDoubleFacedCards) => {
                            // @TODO Duplicate of Algorithm #1
                            const shortSearchedDoubleFaceInfo = searchedDoubleFacedCards
                                .reduce((mapping, doubleFacedCard) => {
                                    const [ searchCard ] = needToSearchCards
                                        .filter(searchedCard => doubleFacedCard.name === searchedCard.doubleName);

                                    if (searchCard) {
                                        mapping[ searchCard.id ] = {
                                            id: doubleFacedCard.id,
                                            name: doubleFacedCard.name,
                                            imageUrl: doubleFacedCard.imageUrl,
                                        };
                                        needToSearchCards.splice(
                                            findIndex(
                                                needToSearchCards, (c) => doubleFacedCard.name === c.doubleName,
                                            ),
                                            1);
                                    }
                                    return mapping;
                                }, {});

                            // @TODO Duplicate #2 of ended processing.
                            const updatedCard = shortSearchedDoubleFaceInfo[ card.id ]
                                ? { ...card, doubleFace: shortSearchedDoubleFaceInfo[ card.id ] }
                                : { ...card };

                            return dispatch(batchActions([
                                appContextTypes.appAddCardInfo(updatedCard),
                                appContextTypes.appCardsRequestSuccess(),
                            ]));
                        });
                }
                return dispatch(batchActions([
                    appContextTypes.appAddCardInfo(card),
                    appContextTypes.appCardsRequestSuccess(),
                ]));
            })
            .catch((e) => dispatch(appContextTypes.appCardsRequestFailed(e)));
    };
}

export function getSetList() {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(appContextTypes.appCardSetsRequestStarted());

        if (state.entities.CardSet.items.length !== 0) {
            return dispatch(appContextTypes.appCardSetsRequestSuccess());
        }

        return requestGetSetList()
            .then(sets => {
                dispatch(batchActions([
                    ...map(sets, set => mtgApiTypes.addSet(set)),
                    appContextTypes.appCardSetsRequestSuccess(),
                ]));
            })
            .catch((e) => dispatch(appContextTypes.appCardSetsRequestFailed(e)));
    };
}

export function getSetCardsByCode(code) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(appContextTypes.appCardSetsRequestStarted());

        if (state.appContext.CardSets.data[ code ]) {
            return dispatch(appContextTypes.appCardSetsRequestSuccess());
        }

        return requestGetSetCardsByCode(code)
            .then(cardsFromSet => {
                const doubleFacedCards = cardsFromSet.filter((cardFromSet) => cardFromSet.layout === DOUBLE_FACED_TYPE);

                const needToSearchCards = doubleFacedCards.map(card => {
                    const [ searched ] = card.names.filter(name => name !== card.name);
                    return {
                        id: card.id,
                        doubleName: searched,
                    };
                });
                // @TODO Algorithm #1. Need to optimize.
                const shortDoubleFaceInfo = doubleFacedCards.reduce((mapping, card) => {
                    const [ searchCard ] = needToSearchCards
                        .filter(searchedCard => card.name === searchedCard.doubleName);

                    if (searchCard) {
                        mapping[ searchCard.id ] = {
                            id: card.id,
                            name: card.name,
                            imageUrl: card.imageUrl,
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
                            const compositions = cardsFromSet.map(cardFromSet => {
                                if (!cardFromSet.manaCost && cardFromSet.types.indexOf('Land') === -1) {
                                    return null;
                                }
                                if (unitedDFcards[cardFromSet.id]) {
                                    return {
                                        ...cardFromSet,
                                        doubleFace: unitedDFcards[cardFromSet.id]
                                    };
                                }
                                return {
                                    ...cardFromSet
                                };
                            });

                            return dispatch(batchActions([
                                mtgApiTypes.addSetCards(code, compact(compositions)),
                                appContextTypes.appCardSetsRequestSuccess(),
                            ]));
                        });
                }

                // @TODO Duplicate #2 of ended processing.
                const compositions = cardsFromSet.map(suggest => {
                    if (!suggest.manaCost && suggest.types.indexOf('Land') === -1) {
                        return null;
                    }
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
                    mtgApiTypes.addSetCards(code, compact(compositions)),
                    appContextTypes.appCardSetsRequestSuccess(),
                ]));
            })
            .catch((e) => dispatch(appContextTypes.appCardSetsRequestFailed(e)));
    };
}
