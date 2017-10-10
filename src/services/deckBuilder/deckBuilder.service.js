import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import map from 'lodash/map';
import pick from 'lodash/pick';
import compact from 'lodash/compact';
import { serverApiUrl, databaseApiUrl } from './../config.service';
import orm from '../../reducers/entities';

axios.defaults.adapter = httpAdapter;

const fields = [
    'count',
    'artist',
    'cmc',
    'colorIndentity',
    'colors',
    'flavor',
    'id',
    'set',
    'setName',
    'layout',
    'names',
    'multiverseid',
    'imageUrl',
    'manaCost',
    'name',
    'text',
    'type',
    'types',
    'supertypes',
    'rarity'
];

/**
 * @param {Array} cardList
 * @param {getState} state
 * @returns {Promise}
 */
export const getDeckListByCardNames = (cardList, state) => {
    const requests = [];
    const session = orm.mutableSession(state.entities);
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
    axios.get(`${databaseApiUrl}entities/Deck/itemsById.json`)
        .then(response => response.data)
        .catch(() => []);

/**
 * @param deckId
 */
export const getDeckById = (deckId) =>
    axios.get(`${databaseApiUrl}entities/Deck/itemsById/${deckId}.json`)
        .then(response => response.data)
        .catch(() => []);

/**
 * @param deckId
 */
export const getCardsByDeckId = (deckId) =>
    axios.get(`${databaseApiUrl}entities/DeckCardList/itemsById.json`)
        .then(response => {
            const deckCardList = response.data;
            const relations = deckCardList.filter(relation => relation.fromDeckId === deckId);
            return relations.map(relation => relation.toCardId);
        })
        .catch(() => null);

/**
 * @returns {Promise}
 */
export const getCardList = () =>
    axios.get(`${databaseApiUrl}/entities/Card/itemsById.json`)
        .then(response => response.data)
        .catch(() => []);

/**
 * @param cardId
 */
export const getCardById = (cardId) =>
    axios.get(`${databaseApiUrl}entities/Card/itemsById/${cardId}.json`)
        .then(response => response.data)
        .catch(() => null);

/**
 * @param cardIds
 * @param state
 * @returns {Promise.<TResult>}
 */
export const getCardByIds = (cardIds, state) => {
    const requests = [];
    const session = orm.mutableSession(state.entities);
    map(cardIds, cardId => {
        const promise = new Promise((fulfil) => {
            try {
                const card = session.Card.get({ cardId }).ref;
                fulfil(card);
            } catch (e) {
                const request = axios.get(`${databaseApiUrl}entities/Card/itemsById/${cardId}.json`)
                    .then(response => response.data)
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
