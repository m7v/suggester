import {
    APP_CARDSET_ADD_CARDS,
    APP_CARDSET_ADD_CARDSET
} from '../../../core/reducers/appContext/appContext.helper';

export function addSetCards(setCode, cards) {
    return {
        type: APP_CARDSET_ADD_CARDS,
        payload: {setCode, cards},
        meta: {}
    };
}

export function addSet(set) {
    return {
        type: APP_CARDSET_ADD_CARDSET,
        payload: {set},
        meta: {}
    };
}
