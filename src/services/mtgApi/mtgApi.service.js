import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import uniqBy from 'lodash/uniqBy';
import map from 'lodash/map';
import pick from 'lodash/pick';
import flatten from 'lodash/flatten';
import { serverApiUrl } from './../config.service';

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
 * @param query
 * @returns {Promise}
 */
const getCardsByName = query =>
    axios.get(`${serverApiUrl}cards?name=${query}&layout=normal|split|flip|double-faced&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByFlavor = query =>
    axios.get(`${serverApiUrl}cards?flavor=${query}&layout=normal|split|flip|double-faced&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByText = query =>
    axios.get(`${serverApiUrl}cards?text=${query}&layout=normal|split|flip|double-faced&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsBySubtype = query =>
    axios.get(`${serverApiUrl}cards?subtypes=${query}&layout=normal|split|flip|double-faced&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

export const getCardsByNames = cards => {
    const queries = map(cards, card => getCardsByName(card.doubleName));
    return axios.all(queries)
        .then(axios.spread(function() {
            return uniqBy(flatten(map(arguments, response => response.cards)), 'id');
        }));
};

/**
 * @param cardId
 */
export const getCardById = (cardId) =>
    axios.get(`${serverApiUrl}cards/${cardId}`)
        .then(response => pick(response.data.card, fields))
        .catch(() => null);

export const getSetList = () =>
    axios.get(`${serverApiUrl}sets`)
        .then(response => response.data.sets)
        .catch(() => null);

const getSetPlaneswalkerCardsByCode = (code) =>
    axios.get(
        `${serverApiUrl}cards?set=${code}&types=planeswalker&layout=normal|split|flip|double-faced&contains=imageUrl`
    )
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetCreatureCardsByCode = (code) =>
    axios.get(`${serverApiUrl}cards?set=${code}&types=creature&layout=normal|split|flip|double-faced&contains=imageUrl`)
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetInstantCardsByCode = (code) =>
    axios.get(`${serverApiUrl}cards?set=${code}&types=instant&layout=normal|split|flip|double-faced&contains=imageUrl`)
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetSorceryCardsByCode = (code) =>
    axios.get(`${serverApiUrl}cards?set=${code}&types=sorcery&layout=normal|split|flip|double-faced&contains=imageUrl`)
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetEnchantmentCardsByCode = (code) =>
    axios.get(
        `${serverApiUrl}cards?set=${code}&types=enchantment&layout=normal|split|flip|double-faced&contains=imageUrl`
    )
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetArtifactCardsByCode = (code) =>
    axios.get(`${serverApiUrl}cards?set=${code}&types=artifact&layout=normal|split|flip|double-faced&contains=imageUrl`)
        .then(response => response.data)
        .catch(() => ({cards: []}));

const getSetLandCardsByCode = (code) =>
    axios.get(`${serverApiUrl}cards?set=${code}&types=land&layout=normal|split|flip|double-faced&contains=imageUrl`)
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
        getCardsByFlavor(query),
        getCardsByText(query),
        getCardsBySubtype(query)
    ];

    return axios.all(queries)
        .then(axios.spread((setByName, setByFlavor, setByText, setBySubtype) =>
            uniqBy([
                ...setByName.cards,
                ...setByFlavor.cards,
                ...setByText.cards,
                ...setBySubtype.cards
            ], 'id')
        ));
};
