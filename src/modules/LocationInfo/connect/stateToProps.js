import { createSelector } from 'reselect';

const getLocationInfo = (state) => state.appContext.LocationInfo.data;
const getFavoritesLocation = (state) => state.favorites.locationItems;

const locationSelector = createSelector([
    getLocationInfo
], locations => locations);

const favoriteSelector = createSelector([
    getFavoritesLocation
], favorites => favorites);

const getLocation = (locations, locationId) => locations[locationId] || {};
const isFavorite = (locations, locationId) => !!locations[locationId];

export function stateToProps(state, props) {
    return {
        locationId: props.locationId,
        location: getLocation(locationSelector(state), props.locationId),
        isFavorite: isFavorite(favoriteSelector(state), props.locationId),
        isMobile: state.appContext.isMobile,
        loading: state.appContext.Cards.loading,
        error: state.appContext.Cards.error,
    };
}
