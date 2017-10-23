import { bindActionCreators } from 'redux';
import { getSuggestions } from '../../../actions/suggestions/suggestions.actions';
import { setQueryString } from '../../../actions/suggestions/suggestions.types';

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuggestions,
        setQueryString: (query) => setQueryString(query.toLowerCase())
    }, dispatch);
}
