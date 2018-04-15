import { createStore } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import UAParser from 'ua-parser-js';
import rootReducer from '../reducers';
import middlewares from '../middlewares';

// const colorSearch = window.location.hash.split('colors=')[1];
// let colorFilter;
// if (colorSearch) {
//     colorFilter = decodeURI(colorSearch)
//         .split('|')
//         .map(i => i.split('='))
//         .reduce((agg, item) => {
//             agg[item[0]] = item[1] === 'true';
//             return agg;
//         }, {});
// }
const device = (new UAParser()).getDevice();
const initialState = {
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
        locationItems: [],
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
        isOffline: false,
        isMobile: device.type === 'tablet' || device.type === 'mobile',
        News: {
            data: [],
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
                    w: false,
                    u: false,
                    b: false,
                    r: false,
                    g: false,
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
        Timetable: {
            data: [],
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
                    w: false,
                    u: false,
                    b: false,
                    r: false,
                    g: false,
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
                    w: false,
                    u: false,
                    b: false,
                    r: false,
                    g: false,
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
                    w: false,
                    u: false,
                    b: false,
                    r: false,
                    g: false,
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
                    w: false,
                    u: false,
                    b: false,
                    r: false,
                    g: false,
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
                    w: false,
                    u: false,
                    b: false,
                    r: false,
                    g: false,
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
        LocationInfo: {
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
