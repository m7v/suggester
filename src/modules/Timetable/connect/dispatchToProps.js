import {bindActionCreators} from 'redux';
import {
    getTimetable
} from '../../../core/actions/mtgApi/mtgApi.actions';

export default function dispatchToProps(dispatch) {
    return bindActionCreators({
        getTimetable,
    }, dispatch);
}
