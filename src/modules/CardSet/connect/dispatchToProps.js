import { bindActionCreators } from 'redux';
import {
    getSetByCode,
    getSetCardsByCode
} from '../../../actions/mtgApi/mtgApi.actions';
import {
    appSetCardSetColorFilter,
    appSetCardSetTypeFilter,
    appSetCardSetRarityFilter
} from '../../../actions/appContext/appContext.actions';

export default function dispatchToProps(dispatch) {
    return bindActionCreators({
        getSetByCode,
        getSetCardsByCode,
        appSetCardSetColorFilter,
        appSetCardSetTypeFilter,
        appSetCardSetRarityFilter
    }, dispatch);
}
