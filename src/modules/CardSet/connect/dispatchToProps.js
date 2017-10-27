import { bindActionCreators } from 'redux';
import {
    getSetCardsByCode
} from 'actions/mtgApi/mtgApi.actions';
import {
    appSetCardSetColorFilter,
    appSetCardSetTypeFilter,
    appSetCardSetRarityFilter
} from 'actions/appContext/appContext.actions';

export default function dispatchToProps(dispatch) {
    return bindActionCreators({
        getSetCardsByCode,
        appSetCardSetColorFilter,
        appSetCardSetTypeFilter,
        appSetCardSetRarityFilter
    }, dispatch);
}
