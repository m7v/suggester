export const ping = () => {
    return next => {
        return action => {
            return next(action);
        };
    };
};
