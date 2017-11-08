import { bindActionCreators } from 'redux';
import { appInitialized } from './../../../actions/appContext/appContext.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        appInitialized
    }, dispatch);
}
