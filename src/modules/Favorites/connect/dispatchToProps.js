import { bindActionCreators } from 'redux';
import {
    getFavoritesCardList as getCardList,
} from '../../../core/actions/favoritesApi/favoritesApi.actions';
import {
    appSetFavoritesColorFilter as appSetColorFilter,
    appSetFavoritesTypeFilter as appSetTypeFilter,
    appSetFavoritesRarityFilter as appSetRarityFilter,
} from '../../../core/actions/appContext/appContext.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getCardList,
        appSetColorFilter,
        appSetTypeFilter,
        appSetRarityFilter,
    }, dispatch);
}
