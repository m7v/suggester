import {bindActionCreators} from 'redux';
import {
    getDeckListByCardNames,
    getDeckById,
} from '../../../core/actions/deckBuilder/deckBuilder.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getDeckListByCardNames,
        getDeckById
    }, dispatch);
}
