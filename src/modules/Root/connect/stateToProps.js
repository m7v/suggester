import { createSelector } from 'reselect';

const getAppStatus = (state) => state.appContext.initial;

const appStatusSelector = createSelector(
    [getAppStatus],
    (initial) => initial
);

export function mapStateToProps(state) {
    return {
        isInitial: appStatusSelector(state),
    };
}
