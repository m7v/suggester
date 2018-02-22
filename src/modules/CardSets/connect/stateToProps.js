import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';
import reduce from 'lodash/reduce';
import reverse from 'lodash/reverse';

const setList = {
    'expansion': true,
    'commander': true,
    'duel deck': true,
    'core': true,
    'archenemy': true,
    'planechase': true,
    'masterpiece': true,
    'from the vault': true,
    'conspiracy': true,
    'reprint': true,
    'masters': true,
    'un': true,
};

const cardSetsSelector = createSelector([
    (state) => state.appContext.CardSets.data,
], (cardSets) => cardSets);

const cardsetSelector = createSelector([cardSetsSelector], sets => {
    const sortedSets = reverse(sortBy(sets, ['set', 'releaseDate']));
    return reduce(sortedSets, (agg, set) => {
        if (setList[set.type]) {
            if (typeof agg[set.type] === 'boolean') {
                agg[set.type] = [];
            }
            agg[set.type].push(set);
        }
        return agg;
    }, {...setList});
});

export default function stateToProps(state) {
    return {
        isMobile: state.appContext.isMobile,
        sets: cardsetSelector(state),
        loading: state.appContext.CardSets.loading,
        error: state.appContext.CardSets.error,
    };
}
