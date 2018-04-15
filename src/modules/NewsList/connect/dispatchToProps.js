import {bindActionCreators} from 'redux';
import {
    getNewsList
} from '../../../core/actions/mtgApi/mtgApi.actions';

export default function dispatchToProps(dispatch) {
    return bindActionCreators({
        getNewsList,
    }, dispatch);
}
