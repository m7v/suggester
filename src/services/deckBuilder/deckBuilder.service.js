import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { map, pick, compact } from 'lodash';
import { serverApiUrl } from './../config.service';
import orm from './../../store/models/models';

axios.defaults.adapter = httpAdapter;

/**
 * @param {Array} cardList
 * @param {getState} state
 * @returns {Promise}
 */
export const getDeckListByCardNames = (cardList, state) => {
    const requests = [];
    const session = orm.withMutations(state.entities);
    map(Object.keys(cardList), cardName => {

        const promise = new Promise((fullfil) => {
            try {
                const card = session.Card.get({name: cardName}).ref;
                card.count = cardList[cardName];
                fullfil(card);
            } catch (e) {
                const request = axios.get(`${serverApiUrl}cards?name="${cardName}"&contains=imageUrl&pageSize=1`)
                    .then(response => {
                        if (response.data.cards[0]) {
                            response.data.cards[0].count = cardList[cardName];
                            return new Promise(resolve => resolve(
                                pick(
                                    response.data.cards[0],
                                    [
                                        'count',
                                        'artist',
                                        'cmc',
                                        'colorIndentity',
                                        'colors',
                                        'flavor',
                                        'id',
                                        'imageUrl',
                                        'manaCost',
                                        'name',
                                        'text',
                                        'type',
                                        'rarity',
                                        'types'
                                    ]
                                )
                            ));
                        }
                        return new Promise(resolve => resolve(null));
                    })
                    .catch(() => new Promise((resolve) => resolve(null)));
                fullfil(request);
            }
        });
        requests.push(promise);
    });
    return axios
        .all(requests)
        .then(axios.spread(function() {
            return compact(Object.values(arguments));
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

