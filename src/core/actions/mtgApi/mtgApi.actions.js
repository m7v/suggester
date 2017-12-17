import { batchActions } from 'redux-batched-actions';
import map from 'lodash/map';
import * as appContextTypes from '../../../core/actions/appContext/appContext.types';
import * as mtgApiTypes from '../../../core/actions/mtgApi/mtgApi.types';
import {
    getCardById as requestGetCardById,
    getCardByNameAndSet as requestGetCardByNameAndSet,
    getCardsByNames as requestGetCardsByNames,
    getSetList as requestGetSetList,
    getSetCardsByCode as requestGetSetCardsByCode,
    getSetByCode as requestGetSetByCode,
} from '../../services/mtgApi/mtgApi.service';
import {
    buildDoubleFaceCards,
    fullCardsInfoLens,
    getOversizedCardUrl,
    DOUBLE_FACED_TYPE
} from '../../helpers/mtgCard.helper';

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
                            return newCard.info;
                        });
                }
                return {
                    ...card,
                    imageUrlLarge: getOversizedCardUrl(card)
                };
            })
            .then((card) => {
                card.printings = card.printings.filter((set) => !set.match(/(^p.+)/));
                if (card.printings.length > 1) {
                    const requests = card.printings.map((set) => requestGetCardByNameAndSet(card.name, set));
                    return Promise
                        .all(requests)
                        .then((cards) => {
                            card.printingsMap = {};
                            cards.forEach((item) => {
                                card.printingsMap[item.set] = item.id;
                            });

                            return card;
                        });
                }

                return card;
            })
            .then((card) => dispatch(batchActions([
                appContextTypes.appAddCardInfo(card),
                appContextTypes.appCardsRequestSuccess(),
            ])))
            .catch((e) => dispatch(appContextTypes.appCardsRequestFailed(e)));
    };
}

export function getSetList() {
    return (dispatch) => {
        dispatch(appContextTypes.appCardSetsRequestStarted());

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

        const currentSet = state.appContext.CardSets.data[code.toLowerCase()];

        if (currentSet && currentSet.items) {
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
        const currentSet = state.appContext.CardSets.data[code];
        if (currentSet && currentSet.items) {
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
