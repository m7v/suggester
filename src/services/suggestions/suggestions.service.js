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
    axios.get(`${serverApiUrl}cards?name=${query}`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
const getCardsByFlavor = query =>
    axios.get(`${serverApiUrl}cards?flavor=${query}`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));

/**
 * @param query
 * @returns {Promise}
 */
export const getSuggestions = (query) =>
    axios.all([getCardsByName(query), getCardsByFlavor(query)])
        .then(axios.spread((setByName, setByFlavor) => uniqBy([...setByName.cards, ...setByFlavor.cards], 'id')));
