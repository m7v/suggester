import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { serverApiUrl } from './../config.service';

axios.defaults.adapter = httpAdapter;

/**
 * @returns {Promise}
 */
export const getSuggestions = query =>
    axios.get(`${serverApiUrl}suggest/endpoint/list?region_id=1&key=onlinedev&q=${query}`)
        .then(response => new Promise(resolve => resolve(response.data)))
        .catch(() => new Promise((resolve) => resolve([])));
