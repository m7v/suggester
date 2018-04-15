import * as types from './favoritesApi.types';
import { batchActions } from 'redux-batched-actions';
import {
    getCardList,
    addCard,
    removeCard,

    getLocationList,
    addLocation,
    removeLocation
} from '../../services/favoritesApi/favoritesApi.service';

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

export function getFavoritesCardList() {
    return dispatch => {
        dispatch(types.favoritesCardRequestStarted());

        return getCardList()
            .then((cards) => {
                dispatch(
                    batchActions([
                        types.getFavoritesCardList(cards),
                        types.favoritesCardRequestSuccess()
                    ])
                );
            })
            .catch(() => types.favoritesCardRequestFailed());
    };
}

export function favoritesLocationAdd(card) {
    return dispatch => {
        dispatch(types.favoritesCardRequestStarted());

        return addLocation(card)
            .then(() => {
                dispatch(
                    batchActions([
                        types.favoritesLocationAdd(card),
                        types.favoritesCardRequestSuccess()
                    ])
                );
            })
            .catch(() => types.favoritesCardRequestFailed());
    };
}

export function favoritesLocationDelete(cardId) {
    return dispatch => {
        dispatch(types.favoritesCardRequestStarted());

        return removeLocation(cardId)
            .then(() => {
                dispatch(
                    batchActions([
                        types.favoritesLocationDelete(cardId),
                        types.favoritesCardRequestSuccess()
                    ])
                );
            })
            .catch(() => types.favoritesCardRequestFailed());
    };
}

export function getFavoritesLocationList() {
    return dispatch => {
        dispatch(types.favoritesCardRequestStarted());

        return getLocationList()
            .then((cards) => {
                dispatch(
                    batchActions([
                        types.getFavoritesLocationList(cards),
                        types.favoritesCardRequestSuccess()
                    ])
                );
            })
            .catch(() => types.favoritesCardRequestFailed());
    };
}
