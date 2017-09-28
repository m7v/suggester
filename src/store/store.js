import {createStore, applyMiddleware} from 'redux';
import {Map} from 'immutable';
import queryString from 'query-string';
import thunk from 'redux-thunk';
import {enableBatching} from 'redux-batched-actions';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import orm from './models/models';
import {rootReducer} from './../reducers/index';
import {ping} from './../middlewares/ping';
import initializeDatabase from './database';

const parsed = queryString.parse(window.location.search);
const initialState = {
    entities: orm.getDefaultState(),
    suggester: new Map({
        query: parsed.q || '',
        suggestions: [],
    }),
    deckBuilder: new Map({
        draftDeck: ''
    })
};

const store = createStore(
    enableBatching(rootReducer),
    initialState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            ping,
            createLogger(),
        ),
    ),
);

initializeDatabase(store);

export default store;
