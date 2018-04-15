import { createSelector } from 'reselect';


const newsSelector = createSelector([
    (state) => state.appContext.Timetable.data,
], (timetable) => timetable);

export default function stateToProps(state) {
    return {
        isMobile: state.appContext.isMobile,
        timetable: newsSelector(state),
        loading: state.appContext.Timetable.loading,
        error: state.appContext.Timetable.error,
    };
}
