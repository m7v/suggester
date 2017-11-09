import {
    ADD_CARDSET
} from '../../../core/reducers/browse/browse.helper';
import {
    APP_CARDSET_ADD_CARDS
} from '../../../core/reducers/appContext/appContext.helper';

export function addSet(set) {
    return {
        type: ADD_CARDSET,
        payload: {set},
        meta: {}
    };
}

export function addSetCards(setCode, cards) {
    return {
        type: APP_CARDSET_ADD_CARDS,
        payload: {setCode, cards},
        meta: {}
    };
}
