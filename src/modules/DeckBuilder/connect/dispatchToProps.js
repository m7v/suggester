import {bindActionCreators} from 'redux';
import {
    getDeckListByCardNames,
    getDeckById,
} from '../../../actions/deckBuilder/deckBuilder.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getDeckListByCardNames,
        getDeckById
    }, dispatch);
}
