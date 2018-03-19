import flow from 'lodash/flow';
import { configureHandlers } from './handlers';
import { configureActionToHandler } from './actionToHandler';

export default function createAsyncMiddleware(services, config) {

    const handleAction = flow(configureHandlers, configureActionToHandler)(services, config);
    // нужен чтобы связать абсолютно все запросы к апям на сервере, чтобы понимать причины длительного ответа

    return (store) => (next) => (action) => {
        if (!action.async) {
            return next(action);
        }
        const state = store.getState();
        const { payload, type } = action;

        next(action);

        // Не обрабатываем асинхронные экшны в офлайне,
        // чтобы не сыпались ошибки во все стороны
        if (state.appContext.isOffline) {
            return next({
                payload: {
                    name: 'OfflineError',
                    message: 'No network',
                },
                type: `${type}_ERROR`,
                meta: payload,
            });
        }

        return handleAction(action).then(
            (successPayload) => next({
                payload: successPayload,
                meta: payload,
                type: `${type}_SUCCESS`,
                // ^^ То самое место, связывающее START и END async экшена
                // START текущего async`а и начало команды связывается непосредственно в команде
            }),
            (errorPayload) => next({
                payload: errorPayload,
                meta: payload,
                type: `${type}_ERROR`,
            }),
        );
    };
}
