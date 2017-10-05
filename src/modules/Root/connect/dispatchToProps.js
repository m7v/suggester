import { bindActionCreators } from 'redux';
import { getDeckList } from '../../../actions/deckBuilder/deckBuilder.actions';
import { appInitialized } from '../../../actions/appContext/appContext.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getDeckList,
        appInitialized
    }, dispatch);
}
