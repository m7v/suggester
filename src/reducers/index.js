import {combineReducers} from 'redux';
import suggestionsReducer from './suggestions/suggestions.reducer';

export const rootReducer = combineReducers({
    suggester: suggestionsReducer
});
