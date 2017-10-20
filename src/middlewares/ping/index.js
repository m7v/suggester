export const ping = () => {
    return next => {
        return action => {
            console.log('Logger', action.type);
            return next(action);
        };
    };
};
