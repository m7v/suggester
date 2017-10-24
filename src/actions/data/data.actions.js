import * as types from './data.types';

export function dataDeckRequestStarted() {
    return dispatch => dispatch(types.dataDeckRequestStarted());
}
export function dataDeckRequestSuccess() {
    return dispatch => dispatch(types.dataDeckRequestSuccess());
}
export function dataDeckRequestFailed() {
    return dispatch => dispatch(types.dataDeckRequestFailed());
}
export function dataDeckCreate(deck) {
    return dispatch => dispatch(types.dataDeckCreate(deck));
}
export function dataDeckUpdate(deckId, deck) {
    return dispatch => dispatch(types.dataDeckUpdate(deckId, deck));
}
export function dataDeckDelete(deckId) {
    return dispatch => dispatch(types.dataDeckDelete(deckId));
}
export function dataDeckGetList(decks) {
    return dispatch => dispatch(types.dataDeckGetList(decks));
}
export function dataCardRequestSuccess() {
    return dispatch => dispatch(types.dataCardRequestSuccess());
}
export function dataCardRequestStarted() {
    return dispatch => dispatch(types.dataCardRequestStarted());
}
export function dataCardRequestFailed() {
    return dispatch => dispatch(types.dataCardRequestFailed());
}
export function dataCardCreate(cardId, card) {
    return dispatch => dispatch(types.dataCardCreate(card));
}
export function dataCardUpdate(cardId, card) {
    return dispatch => dispatch(types.dataCardUpdate(cardId, card));
}
export function dataCardDelete(cardId) {
    return dispatch => dispatch(types.dataCardDelete(cardId));
}
export function dataCardGetList(cards) {
    return dispatch => dispatch(types.dataCardGetList(cards));
}
