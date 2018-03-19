import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import uniqBy from 'lodash/uniqBy';
import map from 'lodash/map';
import compact from 'lodash/compact';
import pick from 'lodash/pick';
import flatten from 'lodash/flatten';
import { serverApiUrl } from './../config.service';
import { fields, layouts } from './mtgApi.config';

axios.defaults.adapter = httpAdapter;

/**
 * @param {Array} cardList
 * @returns {Promise}
 */
export const getDeckListByCardNames = (cardList) => {
    const requests = [];

    map(Object.keys(cardList), cardName => {
        const requestUrl = `${serverApiUrl}cards?name="${cardName}"&layout=${layouts}&contains=imageUrl&pageSize=1`;
        const promise = new Promise((fulfil) => {
            // try {
            // const card = session.Card.get({name: cardName}).ref;
            // card.count = cardList[cardName];
            // fulfil(card);
            // } catch (e) {
            const request = axios.get(requestUrl)
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
            // }
        });
        requests.push(promise);
    });
    return axios
        .all(requests)
        .then(axios.spread(function() {
            return compact(Object.values(arguments));
        }));
};

const getCardRequestByTypeAndCode = (code, type) => {
    const queries = [
        axios.get(
            `${serverApiUrl}cards?colors=black&set=${code}&types=${type}&layout=${layouts}&contains=imageUrl`
        ),
        axios.get(
            `${serverApiUrl}cards?colors=red&set=${code}&types=${type}&layout=${layouts}&contains=imageUrl`
        ),
        axios.get(
            `${serverApiUrl}cards?colors=blue&set=${code}&types=${type}&layout=${layouts}&contains=imageUrl`
        ),
        axios.get(
            `${serverApiUrl}cards?colors=white&set=${code}&types=${type}&layout=${layouts}&contains=imageUrl`
        ),
        axios.get(
            `${serverApiUrl}cards?colors=green&set=${code}&types=${type}&layout=${layouts}&contains=imageUrl`
        )
    ];

    return axios.all(queries)
        .then(axios.spread((black, red, blue, white, green) => ({
            cards: [
                ...black.data.cards,
                ...red.data.cards,
                ...blue.data.cards,
                ...white.data.cards,
                ...green.data.cards,
            ]
        })))
        .catch(() => ({cards: []}));
};


/**
 * @param card
 * @returns {Promise}
 */
const getDoubleFaceCard = (card) =>
    axios.get(`${serverApiUrl}cards?name=${card.doubleName}&set=${card.set}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByName = query =>
    axios.get(`${serverApiUrl}cards?name=${query}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByArtist = query =>
    axios.get(`${serverApiUrl}cards?artist=${query}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByFlavor = query =>
    axios.get(`${serverApiUrl}cards?flavor=${query}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByText = query =>
    axios.get(`${serverApiUrl}cards?text=${query}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsBySubtype = query =>
    axios.get(`${serverApiUrl}cards?subtypes=${query}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

export const getCardsByNames = cards => {
    const queries = map(cards, card => getCardsByName(card.doubleName));
    return axios.all(queries)
        .then(axios.spread(function() {
            return uniqBy(flatten(map(arguments, response => response.cards)), 'id');
        }));
};

export const getDoubleFaceCards = cards =>
    axios.all(map(cards, getDoubleFaceCard))
        .then(axios.spread(function() {
            return uniqBy(flatten(map(arguments, response => response.cards)), 'id');
        }));

/**
 * @param cardId
 */
export const getCardById = (cardId) =>
    axios.get(`${serverApiUrl}cards/${cardId}?contains=imageUrl`)
        .then(response => pick(response.data.card, fields))
        .catch(() => null);

export const getCardByNameAndSet = (name, set) =>
    axios.get(`${serverApiUrl}cards?name=${name}&set=${set}&contains=imageUrl`)
        .then(response => pick(response.data.cards[0], ['id', 'set']))
        .catch(() => null);

export const getSetList = () =>
    axios.get(`${serverApiUrl}sets`)
        .then(response => response.data.sets)
        .catch(() => null);

export const getSetByCode = (code) =>
    axios.get(`${serverApiUrl}sets/${code}`)
        .then(response => response.data.set)
        .catch(() => null);

const getSetPlaneswalkerCardsByCode = (code) =>
    axios.get(
        `${serverApiUrl}cards?set=${code}&types=planeswalker&layout=${layouts}&contains=imageUrl`
    )
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetCreatureCardsByCode = (code) => getCardRequestByTypeAndCode(code, 'creature');

const getSetInstantCardsByCode = (code) =>
    axios.get(`${serverApiUrl}cards?set=${code}&types=instant&layout=${layouts}&contains=imageUrl`)
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetSorceryCardsByCode = (code) =>
    axios.get(`${serverApiUrl}cards?set=${code}&types=sorcery&layout=${layouts}&contains=imageUrl`)
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetEnchantmentCardsByCode = (code) =>
    axios.get(
        `${serverApiUrl}cards?set=${code}&types=enchantment&layout=${layouts}&contains=imageUrl`
    )
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetArtifactCardsByCode = (code) =>
    axios.get(`${serverApiUrl}cards?set=${code}&types=artifact&layout=${layouts}&contains=imageUrl`)
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetLandCardsByCode = (code) =>
    axios.get(`${serverApiUrl}cards?set=${code}&types=land&layout=${layouts}&contains=imageUrl`)
        .then(response => response.data)
        .catch(() => ({cards: []}));

export const getSetCardsByCode = (code) => {
    const queries = [
        getSetPlaneswalkerCardsByCode(code),
        getSetCreatureCardsByCode(code),
        getSetInstantCardsByCode(code),
        getSetSorceryCardsByCode(code),
        getSetEnchantmentCardsByCode(code),
        getSetArtifactCardsByCode(code),
        getSetLandCardsByCode(code),
    ];

    return axios.all(queries)
        .then(axios.spread((planeswalker, creature, instant, sorcery, enchantment, artifact, land) =>
            uniqBy([
                ...planeswalker.cards,
                ...creature.cards,
                ...instant.cards,
                ...sorcery.cards,
                ...enchantment.cards,
                ...artifact.cards,
                ...land.cards
            ], 'id')
        ))
        .then(cards => map(cards, card => pick(card, fields)))
        .catch(() => null);
};

/**
 * @param query
 * @returns {Promise}
 */
export const getSuggestions = (query) => {
    const queries = [
        getCardsByName(query),
        getCardsByArtist(query),
        getCardsByFlavor(query),
        getCardsByText(query),
        getCardsBySubtype(query)
    ];

    return axios.all(queries)
        .then(axios.spread((setByName, setByArtist, setByFlavor, setByText, setBySubtype) =>
            uniqBy([
                ...setByName.cards,
                ...setByArtist.cards,
                ...setByFlavor.cards,
                ...setByText.cards,
                ...setBySubtype.cards
            ], 'multiverseid')
        ));
};
