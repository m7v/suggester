import {createStore, applyMiddleware} from 'redux';
import queryString from 'query-string';
import thunk from 'redux-thunk';
import {enableBatching} from 'redux-batched-actions';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import orm from '../reducers/entities/index';
import rootReducer from '../reducers';
import {ping} from '../middlewares/ping';
import initializeDatabase from './database';

const parsed = queryString.parse(window.location.search);
const initialState = {
    entities: orm.getDefaultState(),
    suggester: {
        meta: {
            loading: false,
            error: false
        },
        query: parsed.q || '',
        suggestions: [],
    },
    deckBuilder: {
        meta: {
            loading: false,
            error: false
        },
        draftDeck: ''
    }
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
