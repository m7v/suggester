import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import MobileDetect from 'mobile-detect';
import rootReducer from '../reducers';
import { ping } from '../middlewares/ping';
import { getDefaultState } from './database';

const searchedString = window.location.hash.split('q=')[1];

const initialState = {
    entities: getDefaultState(),
    suggester: {
        meta: {
            loading: false,
            error: false,
        },
        query: searchedString || '',
        suggestions: [],
        latestQuery: {}
    },
    deckBuilder: {
        meta: {
            loading: false,
            error: false,
        },
        draftDeck: '',
    },
    appContext: {
        initial: false,
        isMobile: !!new MobileDetect(window.navigator.userAgent).mobile(),
        Cards: {
            loading: false,
            error: false,
        },
        Decks: {
            loading: false,
            error: false,
        },
        Favorites: {
            loading: false,
            error: false,
        },
        DeckBuilder: {
            loading: false,
            error: false,
        },
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

export default store;
