import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import map from 'lodash/map';
import compact from 'lodash/compact';
import { databaseApiUrl } from './../config.service';

axios.defaults.adapter = httpAdapter;
//
// const fields = [
//     'count',
//     'artist',
//     'cmc',
//     'colorIndentity',
//     'colors',
//     'flavor',
//     'id',
//     'set',
//     'setName',
//     'layout',
//     'names',
//     'multiverseid',
//     'imageUrl',
//     'manaCost',
//     'name',
//     'text',
//     'type',
//     'types',
//     'supertypes',
//     'rarity'
// ];

const getDecks = () => JSON.parse(window.localStorage.getItem('decks')) || {};

/**
 * @returns {Promise}
 */
export const getDeckList = () =>
    // axios.get(`${databaseApiUrl}entities/Deck/itemsById.json`)
    //     .then(response => response.data)
    //     .catch(() => []);
    Promise.resolve(getDecks());

export const saveDeck = (deck) => {
    const decks = getDecks();
    decks[deck.id] = deck;
    window.localStorage.setItem('decks', JSON.stringify(decks));
};

export const removeDeck = (deckId) => {
    const decks = getDecks();
    delete decks[deckId];
    window.localStorage.setItem('decks', JSON.stringify(decks));
};

/**
 * @param deckId
 */
export const getDeckById = (deckId) => {
    // axios.get(`${databaseApiUrl}entities/Deck/itemsById/${deckId}.json`)
    //     .then(response => response.data)
    //     .catch(() => []);
    const decks = getDecks();
    return Promise.resolve(decks[deckId]);
};

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
 * @returns {Promise.<TResult>}
 */
export const getCardByIds = (cardIds) => {
    const requests = [];
    map(cardIds, cardId => {
        const promise = new Promise((fulfil) => {
            const request = axios.get(`${databaseApiUrl}entities/Card/itemsById/${cardId}.json`)
                .then(response => response.data)
                .catch(() => new Promise((resolve) => resolve(null)));
            fulfil(request);
        });
        requests.push(promise);
    });

    return axios
        .all(requests)
        .then(axios.spread(function() {
            return compact(Object.values(arguments));
        }));
};
