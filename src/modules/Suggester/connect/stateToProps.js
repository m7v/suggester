import { createSelector } from 'reselect';

const getSuggestQuery = (state) => state.suggester.query;
const getSuggestions = (state) => state.suggester.suggestions;

const suggestionsSelector = createSelector(
    [getSuggestions],
    (suggestions) => suggestions
);

const querySelector = createSelector(
    [getSuggestQuery],
    (query) => query
);

export function mapStateToProps(state) {
    return {
        searchingCard: querySelector(state),
        suggestions: suggestionsSelector(state),
        loading: state.suggester.meta.loading,
    };
}
