import * as types from './favoritesApi.types';
import { batchActions } from 'redux-batched-actions';
import {
    getCardList,
    addCard,
    removeCard
} from 'services/favoritesApi/favoritesApi.service';

export function favoritesCardAdd(card) {
    return dispatch => {
        dispatch(types.favoritesCardRequestStarted());

        return addCard(card)
            .then(() => {
                dispatch(
                    batchActions([
                        types.favoritesCardAdd(card),
                        types.favoritesCardRequestSuccess()
                    ])
                );
            })
            .catch(() => types.favoritesCardRequestFailed());
    };
}

export function favoritesCardDelete(cardId) {
    return dispatch => {
        dispatch(types.favoritesCardRequestStarted());

        return removeCard(cardId)
            .then(() => {
                dispatch(
                    batchActions([
                        types.favoritesCardDelete(cardId),
                        types.favoritesCardRequestSuccess()
                    ])
                );
            })
            .catch(() => types.favoritesCardRequestFailed());
    };
}

export function favoritesCardGetList() {
    return dispatch => {
        dispatch(types.favoritesCardRequestStarted());

        return getCardList()
            .then((cards) => {
                dispatch(
                    batchActions([
                        types.favoritesCardGetList(cards),
                        types.favoritesCardRequestSuccess()
                    ])
                );
            })
            .catch(() => types.favoritesCardRequestFailed());
    };
}
