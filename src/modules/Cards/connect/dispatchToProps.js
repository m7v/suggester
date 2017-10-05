import {bindActionCreators} from 'redux';
import {
    getCardList,
} from '../../../actions/deckBuilder/deckBuilder.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getCardList,
    }, dispatch);
}
