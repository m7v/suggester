import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ping } from './ping';
import { swStore } from './swStore';

let middlewares;
if (process.env.NODE_ENV !== 'production') {
    middlewares = composeWithDevTools(
        applyMiddleware(
            thunk,
            ping,
            swStore
        ),
    );
} else {
    middlewares = composeWithDevTools(
        applyMiddleware(
            thunk,
            swStore
        )
    );
}

export default middlewares;
