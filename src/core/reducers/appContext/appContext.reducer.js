import {
    APP_CONTEXT_INITIALIZED,
    APP_CONTEXT_SET_SW_DATA,
    APP_SET_CARDS_COLORS_FILTERS,
    APP_SET_CARDS_TYPES_FILTERS,
    APP_SET_CARDS_RARITY_FILTERS,
    APP_SET_CARDSET_COLORS_FILTERS,
    APP_SET_CARDSET_TYPES_FILTERS,
    APP_SET_CARDSET_RARITY_FILTERS,
    APP_SET_FAVORITES_COLORS_FILTERS,
    APP_SET_FAVORITES_TYPES_FILTERS,
    APP_SET_FAVORITES_RARITY_FILTERS,
    APP_CARDS_REQUEST_STARTED,
    APP_CARDS_REQUEST_FAILED,
    APP_CARDS_REQUEST_SUCCESS,
    APP_DECKS_REQUEST_STARTED,
    APP_DECKS_REQUEST_SUCCESS,
    APP_DECKS_REQUEST_FAILED,
    APP_FAVORITES_REQUEST_STARTED,
    APP_FAVORITES_REQUEST_SUCCESS,
    APP_FAVORITES_REQUEST_FAILED,
    APP_CARD_ADD_INFO,
    APP_CARDSET_ADD_CARDS,
    APP_CARDSET_ADD_CARDSET,
    APP_CARDSETS_REQUEST_STARTED,
    APP_CARDSETS_REQUEST_SUCCESS,
    APP_CARDSETS_REQUEST_FAILED,

    APP_NEWS_ADD_NEWS,
    APP_LOCATION_ADD_LOCATION,
    APP_TIMETABLE_ADD_SCHEDULE,
    APP_NEWS_REQUEST_STARTED,
    APP_NEWS_REQUEST_SUCCESS,
    APP_NEWS_REQUEST_FAILED,
    APP_TIMETABLE_REQUEST_STARTED,
    APP_TIMETABLE_REQUEST_SUCCESS,
    APP_TIMETABLE_REQUEST_FAILED,
    APP_LOCATION_REQUEST_STARTED,
    APP_LOCATION_REQUEST_SUCCESS,
    APP_LOCATION_REQUEST_FAILED,
} from './appContext.helper';

/**
 * @param state
 */
function appInitialized(state) {
    return {
        ...state,
        initial: true
    };
}

function appContextSetSWData(state, payload) {
    return {
        ...state,
        ...payload,
        Cards: {
            ...state.Cards,
            ...payload.Cards,
            loading: false,
        },
        CardSets: {
            ...state.CardSets,
            ...payload.CardSets,
            loading: false,
        },
        Favorites: {
            ...state.Favorites,
            ...payload.Favorites,
            loading: false,
        },
        CardInfo: {
            ...state.CardInfo,
            ...payload.CardInfo,
            loading: false,
        },
        isMobile: state.isMobile
    };
}

function appSetColorFilter(state, colors) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            filters: {
                ...state.Cards.filters,
                colors: {
                    ...state.Cards.filters.colors,
                    ...colors
                }
            }
        }
    };
}

function appSetTypeFilter(state, types) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            filters: {
                ...state.Cards.filters,
                types: {
                    ...state.Cards.filters.types,
                    ...types
                }
            }
        }
    };
}

function appSetRarityFilter(state, rarity) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            filters: {
                ...state.Cards.filters,
                rarity: {
                    ...state.Cards.filters.rarity,
                    ...rarity
                }
            }
        }
    };
}

function appSetFavoritesColorFilter(state, colors) {
    return {
        ...state,
        Favorites: {
            ...state.Favorites,
            filters: {
                ...state.Favorites.filters,
                colors: {
                    ...state.Favorites.filters.colors,
                    ...colors
                }
            }
        }
    };
}

function appSetFavoritesTypeFilter(state, types) {
    return {
        ...state,
        Favorites: {
            ...state.Favorites,
            filters: {
                ...state.Favorites.filters,
                types: {
                    ...state.Favorites.filters.types,
                    ...types
                }
            }
        }
    };
}

function appSetFavoritesRarityFilter(state, rarity) {
    return {
        ...state,
        Favorites: {
            ...state.Favorites,
            filters: {
                ...state.Favorites.filters,
                rarity: {
                    ...state.Favorites.filters.rarity,
                    ...rarity
                }
            }
        }
    };
}

function appSetCardSetColorFilter(state, colors) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            filters: {
                ...state.CardSets.filters,
                colors: {
                    ...state.CardSets.filters.colors,
                    ...colors
                }
            }
        }
    };
}

function appSetCardSetRariryFilter(state, rarity) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            filters: {
                ...state.CardSets.filters,
                rarity: {
                    ...state.CardSets.filters.rarity,
                    ...rarity
                }
            }
        }
    };
}

function appSetCardSetTypeFilter(state, types) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            filters: {
                ...state.CardSets.filters,
                types: {
                    ...state.CardSets.filters.types,
                    ...types
                }
            }
        }
    };
}

function appAddCardInfo(state, card) {
    return {
        ...state,
        CardInfo: {
            ...state.CardInfo,
            data: {
                ...state.CardInfo.data,
                [card.id]: {
                    ...state.CardInfo.data[card.id],
                    ...card
                }
            }
        }
    };
}

function appCardsRequestStarted(state) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            loading: true,
        }
    };
}

function appCardsRequestFailed(state) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            loading: false,
            error: true
        }
    };
}

function appCardsRequestSuccess(state) {
    return {
        ...state,
        Cards: {
            ...state.Cards,
            loading: false,
            error: false
        }
    };
}

function appDecksRequestStarted(state) {
    return {
        ...state,
        Decks: {
            ...state.Decks,
            loading: true,
        }
    };
}

function appDecksRequestSuccess(state) {
    return {
        ...state,
        Decks: {
            ...state.Decks,
            loading: false,
            error: false
        }
    };
}

function appDecksRequestFailed(state) {
    return {
        ...state,
        Decks: {
            ...state.Decks,
            loading: false,
            error: true
        }
    };
}

function appFavoritesRequestStarted(state) {
    return {
        ...state,
        Favorites: {
            ...state.Favorites,
            loading: true,
        }
    };
}

function appFavoritesRequestSuccess(state) {
    return {
        ...state,
        Favorites: {
            ...state.Favorites,
            loading: false,
            error: false
        }
    };
}

function appFavoritesRequestFailed(state) {
    return {
        ...state,
        Favorites: {
            ...state.Favorites,
            loading: false,
            error: true
        }
    };
}

function appNewsRequestStarted(state) {
    return {
        ...state,
        News: {
            ...state.News,
            loading: true,
            error: false
        }
    };
}
function appNewsRequestSuccess(state) {
    return {
        ...state,
        News: {
            ...state.News,
            loading: false,
            error: false
        }
    };
}
function appNewsRequestFailed(state) {
    return {
        ...state,
        News: {
            ...state.News,
            loading: false,
            error: true
        }
    };
}

function appCardSetsRequestStarted(state) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            loading: true,
            error: false
        }
    };
}

function appCardSetsRequestSuccess(state) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            loading: false,
            error: false
        }
    };
}

function appCardSetsRequestFailed(state) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            loading: false,
            error: true
        }
    };
}

function appCardSetsAddCards(state, code, cards) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            data: {
                ...state.CardSets.data,
                [code.toLowerCase()]: {
                    ...state.CardSets.data[code],
                    items: cards
                }
            }
        }
    };
}

function appCardSetsAddSet(state, code, set) {
    return {
        ...state,
        CardSets: {
            ...state.CardSets,
            data: {
                ...state.CardSets.data,
                [code.toLowerCase()]: {
                    ...state.CardSets.data[code.toLowerCase()],
                    ...set,
                },
            }
        }
    };
}


function appLocationRequestStarted(state) {
    return {
        ...state,
        LocationInfo: {
            ...state.LocationInfo,
            loading: true,
            error: false
        }
    };
}
function appLocationRequestSuccess(state) {
    return {
        ...state,
        LocationInfo: {
            ...state.LocationInfo,
            loading: false,
            error: false
        }
    };
}
function appLocationRequestFailed(state) {
    return {
        ...state,
        LocationInfo: {
            ...state.LocationInfo,
            loading: false,
            error: true
        }
    };
}

function appNewsAddNews(state, news) {
    return {
        ...state,
        News: {
            ...state.News,
            data: [
                ...news
            ]
        }
    };
}

function appLocationAddLocation(state, location) {
    return {
        ...state,
        LocationInfo: {
            ...state.LocationInfo,
            data: {
                ...state.LocationInfo.data,
                [location.id]: {
                    ...state.LocationInfo.data[location.id],
                    ...location
                }
            }
        }
    };
}


function appTimetableRequestStarted(state) {
    return {
        ...state,
        Timetable: {
            ...state.Timetable,
            loading: true,
            error: false
        }
    };
}
function appTimetableRequestSuccess(state) {
    return {
        ...state,
        Timetable: {
            ...state.Timetable,
            loading: false,
            error: false
        }
    };
}
function appTimetableRequestFailed(state) {
    return {
        ...state,
        Timetable: {
            ...state.Timetable,
            loading: false,
            error: true
        }
    };
}

function appTimetableAddSchedule(state, schedule) {
    return {
        ...state,
        Timetable: {
            ...state.Timetable,
            data: schedule
        }
    };
}

/**
 * @param state
 * @param action
 * @returns {*}
 */
export default (state = {}, action) => {
    switch (action.type) {
        case APP_CONTEXT_SET_SW_DATA:
            return appContextSetSWData(state, action.payload);
        case APP_CONTEXT_INITIALIZED:
            return appInitialized(state);
        case APP_SET_FAVORITES_COLORS_FILTERS:
            return appSetFavoritesColorFilter(state, action.payload.colors);
        case APP_SET_FAVORITES_RARITY_FILTERS:
            return appSetFavoritesRarityFilter(state, action.payload.rarity);
        case APP_SET_FAVORITES_TYPES_FILTERS:
            return appSetFavoritesTypeFilter(state, action.payload.types);
        case APP_SET_CARDS_COLORS_FILTERS:
            return appSetColorFilter(state, action.payload.colors);
        case APP_SET_CARDS_RARITY_FILTERS:
            return appSetRarityFilter(state, action.payload.rarity);
        case APP_SET_CARDS_TYPES_FILTERS:
            return appSetTypeFilter(state, action.payload.types);
        case APP_SET_CARDSET_RARITY_FILTERS:
            return appSetCardSetRariryFilter(state, action.payload.rarity);
        case APP_SET_CARDSET_COLORS_FILTERS:
            return appSetCardSetColorFilter(state, action.payload.colors);
        case APP_SET_CARDSET_TYPES_FILTERS:
            return appSetCardSetTypeFilter(state, action.payload.types);
        case APP_CARD_ADD_INFO:
            return appAddCardInfo(state, action.payload.card);
        case APP_CARDS_REQUEST_STARTED:
            return appCardsRequestStarted(state);
        case APP_CARDS_REQUEST_FAILED:
            return appCardsRequestFailed(state);
        case APP_CARDS_REQUEST_SUCCESS:
            return appCardsRequestSuccess(state);
        case APP_DECKS_REQUEST_STARTED:
            return appDecksRequestStarted(state);
        case APP_DECKS_REQUEST_SUCCESS:
            return appDecksRequestSuccess(state);
        case APP_DECKS_REQUEST_FAILED:
            return appDecksRequestFailed(state);
        case APP_FAVORITES_REQUEST_STARTED:
            return appFavoritesRequestStarted(state);
        case APP_FAVORITES_REQUEST_SUCCESS:
            return appFavoritesRequestSuccess(state);
        case APP_FAVORITES_REQUEST_FAILED:
            return appFavoritesRequestFailed(state);
        case APP_CARDSETS_REQUEST_STARTED:
            return appCardSetsRequestStarted(state);
        case APP_CARDSETS_REQUEST_SUCCESS:
            return appCardSetsRequestSuccess(state);
        case APP_CARDSETS_REQUEST_FAILED:
            return appCardSetsRequestFailed(state);
        case APP_NEWS_REQUEST_STARTED:
            return appNewsRequestStarted(state);
        case APP_NEWS_REQUEST_SUCCESS:
            return appNewsRequestSuccess(state);
        case APP_NEWS_REQUEST_FAILED:
            return appNewsRequestFailed(state);
        case APP_CARDSET_ADD_CARDSET:
            return appCardSetsAddSet(state, action.payload.set.code, action.payload.set);
        case APP_NEWS_ADD_NEWS:
            return appNewsAddNews(state, action.payload.news);
        case APP_LOCATION_ADD_LOCATION:
            return appLocationAddLocation(state, action.payload.location);
        case APP_TIMETABLE_ADD_SCHEDULE:
            return appTimetableAddSchedule(state, action.payload.schedule);
        case APP_TIMETABLE_REQUEST_STARTED:
            return appTimetableRequestStarted(state);
        case APP_TIMETABLE_REQUEST_SUCCESS:
            return appTimetableRequestSuccess(state);
        case APP_TIMETABLE_REQUEST_FAILED:
            return appTimetableRequestFailed(state);
        case APP_LOCATION_REQUEST_STARTED:
            return appLocationRequestStarted(state);
        case APP_LOCATION_REQUEST_SUCCESS:
            return appLocationRequestSuccess(state);
        case APP_LOCATION_REQUEST_FAILED:
            return appLocationRequestFailed(state);
        case APP_CARDSET_ADD_CARDS:
            return appCardSetsAddCards(state, action.payload.setCode, action.payload.cards);
        default:
            return state;
    }
};
