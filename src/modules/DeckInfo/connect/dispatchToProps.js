import {bindActionCreators} from 'redux';
import {
    getCardListByDeckId,
    getDeckById,
} from 'actions/deckBuilder/deckBuilder.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getCardListByDeckId,
        getDeckById
    }, dispatch);
}
