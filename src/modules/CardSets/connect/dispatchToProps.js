import {bindActionCreators} from 'redux';
import {
    getSetList
} from '../../../actions/mtgApi/mtgApi.actions';

export default function dispatchToProps(dispatch) {
    return bindActionCreators({
        getSetList,
    }, dispatch);
}
