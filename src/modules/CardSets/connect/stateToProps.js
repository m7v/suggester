import { createSelector } from 'redux-orm';
import orm from '../../../reducers/entities';
import sortBy from 'lodash/sortBy';
import reduce from 'lodash/reduce';
import reverse from 'lodash/reverse';

const ormSelector = function(state) {
    return state.entities;
};

const cardsetSelector = createSelector(orm, ormSelector, session => {
    const sets = reverse(sortBy(session.CardSet.all().toRefArray(), ['set', 'releaseDate']));
    return reduce(sets, (agg, set) => {
        if (!agg[set.type]) {
            agg[set.type] = [];
        }
        agg[set.type].push(set);
        return agg;
    }, {});
});

export default function stateToProps(state) {
    return {
        isMobile: state.appContext.isMobile,
        sets: cardsetSelector(state),
        loading: state.appContext.CardSets.loading,
        error: state.appContext.CardSets.error,
    };
}
