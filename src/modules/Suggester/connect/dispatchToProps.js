import { bindActionCreators } from 'redux';
import { getSuggestions } from '../../../core/actions/suggestions/suggestions.actions';
import { setQueryString } from '../../../core/actions/suggestions/suggestions.types';

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuggestions,
        setQueryString: (query) => setQueryString(query.toLowerCase())
    }, dispatch);
}
