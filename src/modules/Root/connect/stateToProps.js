export function mapStateToProps(state) {
    return {
        isInitial: state.appContext.initial,
    };
}
