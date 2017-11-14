import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { ping } from './ping';

let middlewares;
if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
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
