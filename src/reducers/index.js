import {combineReducers} from 'redux';
import suggesterReducer from './suggester/suggester.reducer';
import deckBuilderReducer from './deckBuilder/deckBuilder.reducer';

export const rootReducer = combineReducers({
    suggester: suggesterReducer,
    deckBuilder: deckBuilderReducer,
});
