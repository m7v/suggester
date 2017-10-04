import MobileDetect from 'mobile-detect';

export function mapStateToProps(state) {
    return {
        searchingCard: state.suggester.query,
        suggestions: state.suggester.suggestions,
        loading: state.suggester.meta.loading,
        isPhone: new MobileDetect(window.navigator.userAgent).mobile(),
    };
}
