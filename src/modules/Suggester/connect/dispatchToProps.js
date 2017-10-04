import { bindActionCreators } from 'redux';
import { getSuggestions } from '../../../actions/suggestions/suggestions.actions';

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuggestions
    }, dispatch);
}
