import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { uniqBy } from 'lodash';
import { serverApiUrl } from './../config.service';

axios.defaults.adapter = httpAdapter;

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByName = query =>
    axios.get(`${serverApiUrl}cards?name=${query}&layout=normal&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByFlavor = query =>
    axios.get(`${serverApiUrl}cards?flavor=${query}&layout=normal&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByText = query =>
    axios.get(`${serverApiUrl}cards?text=${query}&layout=normal&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsBySubtype = query =>
    axios.get(`${serverApiUrl}cards?subtypes=${query}&layout=normal&contains=imageUrl`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

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
