import {bindActionCreators} from 'redux';
import {
    getDeckListByCardNames,
} from 'actions/deckBuilder/deckBuilder.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getDeckListByCardNames
    }, dispatch);
}
