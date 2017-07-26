import {combineReducers} from 'redux';
import suggesterReducer from './suggester/suggester.reducer';
import deckBuilderReducer from './deckBuilder/deckBuilder.reducer';
import { schema } from '../models/models';

export const rootReducer = combineReducers({
    entities: schema.reducer(),
    suggester: suggesterReducer,
    deckBuilder: deckBuilderReducer,
});
