import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';
import suggesterReducer from './suggester/suggester.reducer';
import appContextReducer from './appContext/appContext.reducer';
import orm from './entities';

const rootReducer = combineReducers({
    entities: createReducer(orm),
    suggester: suggesterReducer,
    deckBuilder: (state = {}) => state,
    appContext: appContextReducer
});

export default rootReducer;
