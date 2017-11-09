import {bindActionCreators} from 'redux';
import {
    getDeckList,
    getDeckListByCardNames,
    removeDeck,
} from '../../../core/actions/deckBuilder/deckBuilder.actions';

export default function dispatchToProps(dispatch) {
    return bindActionCreators({
        getDeckListByCardNames,
        removeDeck,
        getDeckList,
    }, dispatch);
}
