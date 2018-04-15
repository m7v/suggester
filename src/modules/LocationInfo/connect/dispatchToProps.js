import {bindActionCreators} from 'redux';
import {
    getLocationById,
} from '../../../core/actions/mtgApi/mtgApi.actions';
import {
    getFavoritesLocationList,
} from '../../../core/actions/favoritesApi/favoritesApi.actions';
import { setQueryString } from '../../../core/actions/suggestions/suggestions.types';
import {
    favoritesLocationAdd as locationAdd,
    favoritesLocationDelete as locationDelete,
} from '../../../core/actions/favoritesApi/favoritesApi.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        locationAdd,
        locationDelete,
        getLocationById,
        getFavoritesLocationList,
        setQueryString
    }, dispatch);
}
