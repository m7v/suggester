import {bindActionCreators} from 'redux';
import {
    getCardById,
} from '../../../actions/deckBuilder/deckBuilder.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getCardById
    }, dispatch);
}
