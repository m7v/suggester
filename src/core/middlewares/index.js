import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ping } from './ping';

let middlewares;
if (process.env.NODE_ENV === 'production') {
    middlewares = composeWithDevTools(
        applyMiddleware(
            thunk,
            ping,
            createLogger(),
        ),
    );
} else {
    middlewares = applyMiddleware(
        thunk
    );
}

export default middlewares;
