import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';
import suggesterReducer from './suggester/suggester.reducer';
import orm from './entities';

export const rootReducer = combineReducers({
    entities: createReducer(orm),
    suggester: suggesterReducer,
    deckBuilder: (state = {}) => state
});
