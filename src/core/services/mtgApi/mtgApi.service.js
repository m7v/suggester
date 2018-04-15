import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import uniqBy from 'lodash/uniqBy';
import map from 'lodash/map';
import compact from 'lodash/compact';
import pick from 'lodash/pick';
import flatten from 'lodash/flatten';
import { serverApiUrl, popcornServerApiUrl } from './../config.service';
import { fields, layouts } from './mtgApi.config';

axios.defaults.adapter = httpAdapter;
const mtgInstance = axios.create({
    baseURL: serverApiUrl,
    timeout: 10000
});
const popcornInstance = axios.create({
    baseURL: popcornServerApiUrl,
    timeout: 10000
});

/**
 * @param {Array} cardList
 * @returns {Promise}
 */
export const getDeckListByCardNames = (cardList) => {
    const requests = [];

    map(Object.keys(cardList), cardName => {
        const requestUrl = `cards?name="${cardName}"&layout=${layouts}&contains=imageUrl&pageSize=1`;
        const promise = new Promise((fulfil) => {
            // try {
            // const card = session.Card.get({name: cardName}).ref;
            // card.count = cardList[cardName];
            // fulfil(card);
            // } catch (e) {
            const request = mtgInstance.get(requestUrl)
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
        mtgInstance.get(
            `cards?colors=black&set=${code}&types=${type}&layout=${layouts}&contains=imageUrl`
        ),
        mtgInstance.get(
            `cards?colors=red&set=${code}&types=${type}&layout=${layouts}&contains=imageUrl`
        ),
        mtgInstance.get(
            `cards?colors=blue&set=${code}&types=${type}&layout=${layouts}&contains=imageUrl`
        ),
        mtgInstance.get(
            `cards?colors=white&set=${code}&types=${type}&layout=${layouts}&contains=imageUrl`
        ),
        mtgInstance.get(
            `cards?colors=green&set=${code}&types=${type}&layout=${layouts}&contains=imageUrl`
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
        })));
};


/**
 * @param card
 * @returns {Promise}
 */
const getDoubleFaceCard = (card) =>
    mtgInstance.get(`cards?name=${card.doubleName}&set=${card.set}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByName = query =>
    mtgInstance.get(`cards?name=${query}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByArtist = query =>
    mtgInstance.get(`cards?artist=${query}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByFlavor = query =>
    mtgInstance.get(`cards?flavor=${query}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByText = query =>
    mtgInstance.get(`cards?text=${query}&layout=${layouts}&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsBySubtype = query =>
    mtgInstance.get(`cards?subtypes=${query}&layout=${layouts}&contains=imageUrl`)
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
    mtgInstance.get(`cards/${cardId}?contains=imageUrl`)
        .then(response => pick(response.data.card, fields))
        .catch(() => null);

export const getCardByNameAndSet = (name, set) =>
    mtgInstance.get(`cards?name=${name}&set=${set}&contains=imageUrl`)
        .then(response => pick(response.data.cards[0], ['id', 'set']))
        .catch(() => null);

export const getSetList = () =>
    mtgInstance.get('sets')
        .then(response => response.data.sets);

export const getSetByCode = (code) =>
    mtgInstance.get(`sets/${code}`)
        .then(response => response.data.set);

const getSetPlaneswalkerCardsByCode = (code) =>
    mtgInstance.get(
        `cards?set=${code}&types=planeswalker&layout=${layouts}&contains=imageUrl`
    )
        .then(response => response.data);

const getSetCreatureCardsByCode = (code) => getCardRequestByTypeAndCode(code, 'creature');

const getSetInstantCardsByCode = (code) =>
    mtgInstance.get(`cards?set=${code}&types=instant&layout=${layouts}&contains=imageUrl`)
        .then(response => response.data);

const getSetSorceryCardsByCode = (code) =>
    mtgInstance.get(`cards?set=${code}&types=sorcery&layout=${layouts}&contains=imageUrl`)
        .then(response => response.data);

const getSetEnchantmentCardsByCode = (code) =>
    mtgInstance.get(
        `cards?set=${code}&types=enchantment&layout=${layouts}&contains=imageUrl`
    )
        .then(response => response.data);

const getSetArtifactCardsByCode = (code) =>
    mtgInstance.get(`cards?set=${code}&types=artifact&layout=${layouts}&contains=imageUrl`)
        .then(response => response.data);

const getSetLandCardsByCode = (code) =>
    mtgInstance.get(`cards?set=${code}&types=land&layout=${layouts}&contains=imageUrl`)
        .then(response => response.data);

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
        .then(cards => map(cards, card => pick(card, fields)));
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

export const getLocationById = (id) =>
    // popcornInstance.get(`location/${id}`)
    popcornInstance.get('location')
        .then(response => response.data)
        .catch(() => {
            return JSON.parse('{"id": 1,"title": "Какая-то локация","timetable":\n' +
                '[{"title": "Лекция по любой херне", "locationID": 1, "period": {"startTime": "29/04/2018 10:00:00", "endTime": "29/04/2018 11:00:00"}, "imageUrl": "http://placehold.it/200x100", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},\n' +
                '{"title": "Лекция по другой херне", "locationID": 1, "period": {"startTime": "29/04/2018 11:00:00", "endTime": "29/04/2018 12:00:00"}, "imageUrl": "http://placehold.it/200x100", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}\n' +
            ']}');
        });

export const getNewsList = () =>
    popcornInstance.get('news')
        .then(response => response.data)
        .catch(() => {
            return JSON.parse(
                '[{"title": "Нарга и Аоки на Попкорне!", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "image": "http://placehold.it/600x300", "date": "1523107479"},\n' +
                '{"title": "Нарга и Аоки на Попкорне!", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "image": "http://placehold.it/600x300", "date": "1523107479"},\n' +
                '{"title": "Нарга и Аоки на Попкорне!", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "image": "http://placehold.it/600x300", "date": "1523107479"}]'
            );
        });

export const getTimetable = () =>
    popcornInstance.get('timetable')
        .then(response => response.data)
        .catch(() => {
            return JSON.parse(
                '[{"title": "Лекция по любой херне", "locationID": 1, "period": {"startTime": "29/04/2018 10:00:00", "endTime": "29/04/2018 11:00:00"}, "imageUrl": "http://placehold.it/200x100", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},\n' +
                '{"title": "Лекция по другой херне", "locationID": 1, "period": {"startTime": "29/04/2018 11:00:00", "endTime": "29/04/2018 12:00:00"}, "imageUrl": "http://placehold.it/200x100", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}\n' +
                ']'
            );
        });
