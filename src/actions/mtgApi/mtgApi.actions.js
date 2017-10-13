import { batchActions } from 'redux-batched-actions';
import findIndex from 'lodash/findIndex';
import * as deckBuilderTypes from './../deckBuilder/deckBuilder.types';
import * as appContextTypes from './../appContext/appContext.types';
import {
    getCardById as requestGetCardById,
    getCardsByNames as requestGetCardsByNames,
} from '../../services/mtgApi/mtgApi.service';

const DOUBLE_FACED_TYPE = 'double-faced';

export function getCardById(cardId) {
    return (dispatch, getState) => {
        const state = getState();

        dispatch(appContextTypes.appCardsRequestStarted());

        if (state.entities.Card.itemsById[cardId]) {
            return dispatch(appContextTypes.appCardsRequestSuccess());
        }

        return requestGetCardById(cardId)
            .then(card => {
                if (card.layout === DOUBLE_FACED_TYPE) {
                    const needToSearchCards = [];
                    const [searched] = card.names.filter(name => name !== card.name);
                    needToSearchCards.push({
                        id: card.id,
                        doubleName: searched
                    });
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

                            // @TODO Duplicate #2 of ended processing.
                            const updatedCard = shortSearchedDoubleFaceInfo[card.id]
                                ? {...card, doubleFace: shortSearchedDoubleFaceInfo[card.id] }
                                : {...card};

                            return dispatch(batchActions([
                                deckBuilderTypes.addCard(updatedCard),
                                dispatch(appContextTypes.appCardsRequestSuccess())
                            ]));
                        });
                } else {
                    return dispatch(batchActions([
                        deckBuilderTypes.addCard(card),
                        dispatch(appContextTypes.appCardsRequestSuccess())
                    ]));
                }
            })
            .catch((e) => dispatch(appContextTypes.appCardsRequestFailed(e)));
    };
}
