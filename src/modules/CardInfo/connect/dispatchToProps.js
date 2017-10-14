import {bindActionCreators} from 'redux';
import {
    getCardById,
} from '../../../actions/mtgApi/mtgApi.actions';
import { setQueryString } from '../../../actions/suggestions/suggestions.types';

export function dispatchToProps(dispatch) {
    return bindActionCreators({
        getCardById,
        setQueryString
    }, dispatch);
}
