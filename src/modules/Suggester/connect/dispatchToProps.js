import { bindActionCreators } from 'redux';
import { getSuggestions, setQueryString } from '../../../actions/suggestions/suggestions.actions';

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuggestions,
        setQueryString
    }, dispatch);
}
