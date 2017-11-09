import {bindActionCreators} from 'redux';
import {
    getCardList,
} from '../../../core/actions/deckBuilder/deckBuilder.actions';
import {
    appSetColorFilter,
    appSetTypeFilter,
    appSetRarityFilter
} from '../../../core/actions/appContext/appContext.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getCardList,
        appSetColorFilter,
        appSetTypeFilter,
        appSetRarityFilter
    }, dispatch);
}
