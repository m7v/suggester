import {createStore, applyMiddleware} from 'redux';
import {Map} from 'immutable';
import queryString from 'query-string';
import thunk from 'redux-thunk';
import {enableBatching} from 'redux-batched-actions';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './../reducers/index';
import {ping} from './../middlewares/ping';
import entities from './entites';

const parsed = queryString.parse(window.location.search);
const initialState = {
    entities,
    suggester: new Map({
        query: parsed.q || '',
        suggestions: []
    }),
    deckBuilder: new Map({
        draftDeck: ''
    })
};

export const store = createStore(
    enableBatching(rootReducer),
    initialState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            ping,
            createLogger()
        )
    )
);
