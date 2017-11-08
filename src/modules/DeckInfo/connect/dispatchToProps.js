import {bindActionCreators} from 'redux';
import {
    getCardListByDeckId,
    getDeckById,
    removeDeck,
} from '../../../actions/deckBuilder/deckBuilder.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getCardListByDeckId,
        removeDeck,
        getDeckById
    }, dispatch);
}
