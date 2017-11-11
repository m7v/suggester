import { createSelector } from 'reselect';

const getSuggestions = (state) => state.suggester.suggestions;

const suggestionsSelector = createSelector(
    [getSuggestions],
    (suggestions) => suggestions
);

export function mapStateToProps(state) {
    return {
        suggestions: suggestionsSelector(state),
        loading: state.suggester.meta.loading,
        isMobile: state.appContext.isMobile,
    };
}
