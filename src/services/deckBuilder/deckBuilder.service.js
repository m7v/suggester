import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { map, pick, compact } from 'lodash';
import { serverApiUrl } from './../config.service';
import orm from 'src/store/models/models';

axios.defaults.adapter = httpAdapter;

const fields = [
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
];

/**
 * @param {Array} cardList
 * @param {getState} state
 * @returns {Promise}
 */
export const getDeckListByCardNames = (cardList, state) => {
    const requests = [];
    const session = orm.withMutations(state.entities);
    map(Object.keys(cardList), cardName => {

        const promise = new Promise((fulfil) => {
            try {
                const card = session.Card.get({name: cardName}).ref;
                card.count = cardList[cardName];
                fulfil(card);
            } catch (e) {
                const request = axios.get(`${serverApiUrl}cards?name="${cardName}"&contains=imageUrl&pageSize=1`)
                    .then(response => {
                        if (response.data.cards[0]) {
                            response.data.cards[0].count = cardList[cardName];
                            return new Promise(resolve => resolve(
                                pick(response.data.cards[0], fields)
                            ));
                        }
                        return new Promise(resolve => resolve(null));
                    })
                    .catch(() => new Promise((resolve) => resolve(null)));
                fulfil(request);
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
