import {bindActionCreators} from 'redux';
import {
    getCardById,
} from '../../../core/actions/mtgApi/mtgApi.actions';
import {
    getFavoritesCardList,
} from '../../../core/actions/favoritesApi/favoritesApi.actions';
import { setQueryString } from '../../../core/actions/suggestions/suggestions.types';
import {
    favoritesCardAdd as cardAdd,
    favoritesCardDelete as cardDelete,
} from '../../../core/actions/favoritesApi/favoritesApi.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        cardAdd,
        cardDelete,
        getCardById,
        getFavoritesCardList,
        setQueryString
    }, dispatch);
}
