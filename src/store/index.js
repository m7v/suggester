import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import MobileDetect from 'mobile-detect';
import queryString from 'query-string';
import rootReducer from '../reducers';
import { ping } from '../middlewares/ping';
import { getDefaultState } from './database';


const parsed = queryString.parse(window.location.search);
const initialState = {
    entities: getDefaultState(),
    suggester: {
        meta: {
            loading: false,
            error: false,
        },
        query: parsed.q || '',
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
