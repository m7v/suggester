import {bindActionCreators} from 'redux';
import {
    getCardById,
} from 'actions/mtgApi/mtgApi.actions';
import { setQueryString } from 'actions/suggestions/suggestions.types';
import {
    favoritesCardAdd as cardAdd,
    favoritesCardDelete as cardDelete,
} from 'actions/favoritesApi/favoritesApi.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        cardAdd,
        cardDelete,
        getCardById,
        setQueryString
    }, dispatch);
}
