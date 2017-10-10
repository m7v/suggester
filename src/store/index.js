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
const colorFilter = window.location.hash
    .split('colors=')[1]
    .split('|')
    .map(i => i.split('='))
    .reduce((agg, item) => {
        agg[item[0]] = item[1] === 'true';
        return agg;
    }, {});

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
            filters: {
                name: '',
                colors: {
                    w: !!colorFilter.w,
                    u: !!colorFilter.u,
                    b: !!colorFilter.b,
                    r: !!colorFilter.r,
                    g: !!colorFilter.g,
                },
                types: {
                    planeswalker: false,
                    creature: false,
                    instant: false,
                    sorcery: false,
                    enchantment: false,
                    artifact: false,
                    land: false,
                }
            }
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
