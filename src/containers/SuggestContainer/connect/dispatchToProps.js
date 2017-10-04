import { bindActionCreators } from 'redux';
import { getSuggestions } from 'src/actions/suggestions/suggestions.actions';

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuggestions
    }, dispatch);
}
