import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import uniqBy from 'lodash/uniqBy';
import map from 'lodash/map';
import flatten from 'lodash/flatten';
import { serverApiUrl } from './../config.service';

axios.defaults.adapter = httpAdapter;

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