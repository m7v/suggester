import { createSelector } from 'reselect';

const getAppStatus = (state) => state.appContext.initial;
const isMobile = (state) => state.appContext.isMobile;

const appStatusSelector = createSelector(
    [getAppStatus],
    (initial) => initial
);
const isMobileSelector = createSelector(
    [isMobile],
    (isMobile) => isMobile
);

export function mapStateToProps(state) {
    return {
        isInitial: appStatusSelector(state),
        isMobile: isMobileSelector(state),
    };
}
