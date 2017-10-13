import {bindActionCreators} from 'redux';
import {
    getCardById,
} from '../../../actions/mtgApi/mtgApi.actions';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getCardById
    }, dispatch);
}
