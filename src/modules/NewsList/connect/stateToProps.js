import { createSelector } from 'reselect';


const newsSelector = createSelector([
    (state) => state.appContext.News.data,
], (news) => news);

export default function stateToProps(state) {
    return {
        isMobile: state.appContext.isMobile,
        news: newsSelector(state),
        loading: state.appContext.News.loading,
        error: state.appContext.News.error,
    };
}
