import { createStore } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import MobileDetect from 'mobile-detect';
import rootReducer from '../reducers';
import middlewares from '../middlewares';
import { getDefaultState } from './database';

const colorSearch = window.location.hash.split('colors=')[1];
let colorFilter;
if (colorSearch) {
    colorFilter = decodeURI(colorSearch)
        .split('|')
        .map(i => i.split('='))
        .reduce((agg, item) => {
            agg[item[0]] = item[1] === 'true';
            return agg;
        }, {});
}

const initialState = {
    entities: getDefaultState(),
    data: {
        cards: {
            loading: false,
            error: false,
            items: []
        },
        decks: {
            loading: false,
            error: false,
            items: []
        },
    },
    favorites: {
        meta: {
            loading: false,
            error: false,
        },
        items: [],
    },
    suggester: {
        meta: {
            loading: false,
            error: false,
        },
        query: '',
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
        Suggestions: {
            loading: false,
            error: false,
            filters: {
                name: '',
                rarity: {
                    common: false,
                    uncommon: false,
                    rare: false,
                    mythic: false,
                    basicLand: false,
                },
                colors: {
                    w: !!colorFilter && !!colorFilter.w,
                    u: !!colorFilter && !!colorFilter.u,
                    b: !!colorFilter && !!colorFilter.b,
                    r: !!colorFilter && !!colorFilter.r,
                    g: !!colorFilter && !!colorFilter.g,
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
        Favorites: {
            loading: false,
            error: false,
            filters: {
                name: '',
                rarity: {
                    common: false,
                    uncommon: false,
                    rare: false,
                    mythic: false,
                },
                colors: {
                    w: !!colorFilter && !!colorFilter.w,
                    u: !!colorFilter && !!colorFilter.u,
                    b: !!colorFilter && !!colorFilter.b,
                    r: !!colorFilter && !!colorFilter.r,
                    g: !!colorFilter && !!colorFilter.g,
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
        Cards: {
            loading: false,
            error: false,
            filters: {
                name: '',
                rarity: {
                    common: false,
                    uncommon: false,
                    rare: false,
                    mythic: false,
                    basicLand: false,
                },
                colors: {
                    w: !!colorFilter && !!colorFilter.w,
                    u: !!colorFilter && !!colorFilter.u,
                    b: !!colorFilter && !!colorFilter.b,
                    r: !!colorFilter && !!colorFilter.r,
                    g: !!colorFilter && !!colorFilter.g,
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
        CardSets: {
            data: {},
            filters: {
                name: '',
                rarity: {
                    common: false,
                    uncommon: false,
                    rare: false,
                    mythic: false,
                    basicLand: false,
                },
                colors: {
                    w: !!colorFilter && !!colorFilter.w,
                    u: !!colorFilter && !!colorFilter.u,
                    b: !!colorFilter && !!colorFilter.b,
                    r: !!colorFilter && !!colorFilter.r,
                    g: !!colorFilter && !!colorFilter.g,
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
            },
            loading: false,
            error: false,
        },
        CardInfo: {
            data: {}
        },
        Decks: {
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
    middlewares
);

export default store;
