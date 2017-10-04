import {bindActionCreators} from 'redux';
import {
    getDeckListByCardNames,
    removeDeck
} from '../../../actions/deckBuilder/deckBuilder.actions';

export default function dispatchToProps(dispatch) {
    return bindActionCreators({
        getDeckListByCardNames,
        removeDeck
    }, dispatch);
}
