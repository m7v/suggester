import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';
import suggesterReducer from './suggester/suggester.reducer';
import orm from './../store/models/models';
import {Map} from 'immutable';

export const rootReducer = combineReducers({
    entities: createReducer(orm),
    suggester: suggesterReducer,
    deckBuilder: (state = new Map({})) => state
});
