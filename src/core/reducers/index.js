import { combineReducers } from 'redux';
import suggesterReducer from './suggester/suggester.reducer';
import favoritesReducer from './favorites/favorites.reducer';
import appContextReducer from './appContext/appContext.reducer';
import dataReducer from './data/data.reducer';

const rootReducer = combineReducers({
    data: dataReducer,
    suggester: suggesterReducer,
    favorites: favoritesReducer,
    deckBuilder: (state = {}) => state,
    appContext: appContextReducer
});

export default rootReducer;
