import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { serverApiUrl } from './../config.service';

axios.defaults.adapter = httpAdapter;

/**
 * @param {Array} cardList
 * @returns {Promise}
 */
export const getDeckListByCardNames = (cardList) => {
    const requests = [];
    Object.keys(cardList).map(cardName => {
        const promise = axios.get(`${serverApiUrl}cards?name="${cardName}"&contains=imageUrl&pageSize=1`)
            .then(response => {
                if (response.data.cards[0]) {
                    response.data.cards[0].count = cardList[cardName];
                    return new Promise(resolve => resolve(response.data.cards[0]));
                }
                return new Promise(resolve => resolve(response.data.cards));
            })
            .catch(() => new Promise((resolve) => resolve([])));
        requests.push(promise);
    });
    return axios
        .all(requests)
        .then(axios.spread(function() {
            return Object.values(arguments);
        }));
};

/**
 * @param query
 * @returns {Promise}
 */
export const getDeckList = () =>
    axios.get(`${serverApiUrl}cards`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
export const getCardList = query =>
    axios.get(`${serverApiUrl}cards?flavor=${query}`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
export const createDeck = () =>
    axios.get(`${serverApiUrl}cards`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
export const createCard = () =>
    axios.get(`${serverApiUrl}cards`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

