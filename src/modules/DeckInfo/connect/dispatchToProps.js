import {bindActionCreators} from 'redux';
import {
    getCardListByDeckId,
} from '../../../actions/deckBuilder/deckBuilder.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getCardListByDeckId
    }, dispatch);
}
