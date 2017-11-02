import { batchActions } from 'redux-batched-actions';
import map from 'lodash/map';
import * as appContextTypes from 'actions/appContext/appContext.types';
import * as mtgApiTypes from 'actions/mtgApi/mtgApi.types';
import {
    getCardById as requestGetCardById,
    getCardsByNames as requestGetCardsByNames,
    getSetList as requestGetSetList,
    getSetCardsByCode as requestGetSetCardsByCode,
    getSetByCode as requestGetSetByCode,
} from 'services/mtgApi/mtgApi.service';
import {
    buildDoubleFaceCards,
    fullCardsInfoLens,
    getOversizedCardUrl,
    DOUBLE_FACED_TYPE
} from 'helpers/mtgCard.helper';


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
                            const getFullCardsInfo = fullCardsInfoLens(needToSearchCards);
                            const shortDoubleFaceInfo = getFullCardsInfo(searchedDoubleFacedCards);
                            const newCard = { info: {
                                ...card,
                                imageUrlLarge: getOversizedCardUrl(card)
                            }};
                            if (shortDoubleFaceInfo[ card.id ]) {
                                newCard.info = { ...newCard.info, doubleFace: shortDoubleFaceInfo[ card.id ] };
                            }
                            return dispatch(batchActions([
                                appContextTypes.appAddCardInfo(newCard.info),
                                appContextTypes.appCardsRequestSuccess(),
                            ]));
                        })
                        .catch((e) => dispatch(appContextTypes.appCardsRequestFailed(e)));
                }
                return dispatch(batchActions([
                    appContextTypes.appAddCardInfo({
                        ...card,
                        imageUrlLarge: getOversizedCardUrl(card)
                    }),
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

        if (state.entities.CardSet.items.length > 10) {
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

export function getSetByCode(code) {
    return (dispatch, getState) => {
        const state = getState();


        const currentSet = state.entities.CardSet.itemsById[code.toUpperCase()];

        if (currentSet) {
            return Promise.resolve();
        }

        return requestGetSetByCode(code)
            .then(set => dispatch(mtgApiTypes.addSet(set)))
            .catch(() => Promise.resolve());
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
                const doubleFacedCards = cardsFromSet.filter((cardFromSet) =>
                    cardFromSet.layout === DOUBLE_FACED_TYPE);

                const needToSearchCards = doubleFacedCards.map(card => {
                    const [ searched ] = card.names.filter(name => name !== card.name);
                    return {
                        id: card.id,
                        doubleName: searched,
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

                            return dispatch(batchActions([
                                mtgApiTypes.addSetCards(code, buildDoubleFaceCards(cardsFromSet, unitedDFcards)),
                                appContextTypes.appCardSetsRequestSuccess(),
                            ]));
                        })
                        .catch((e) => dispatch(appContextTypes.appCardSetsRequestFailed(e)));
                }

                return dispatch(batchActions([
                    mtgApiTypes.addSetCards(code, buildDoubleFaceCards(cardsFromSet, shortDoubleFaceInfo)),
                    appContextTypes.appCardSetsRequestSuccess(),
                ]));
            })
            .catch((e) => dispatch(appContextTypes.appCardSetsRequestFailed(e)));
    };
}
