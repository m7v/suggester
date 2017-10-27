import {bindActionCreators} from 'redux';
import {
    getCardList,
} from 'actions/deckBuilder/deckBuilder.actions';
import {
    appSetColorFilter,
    appSetTypeFilter,
    appSetRarityFilter
} from 'actions/appContext/appContext.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getCardList,
        appSetColorFilter,
        appSetTypeFilter,
        appSetRarityFilter
    }, dispatch);
}
