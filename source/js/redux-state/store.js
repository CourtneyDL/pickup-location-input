import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'dev/logger';
import createSagaMiddleware from 'redux-saga';

import root_reducer from 'redux-state/reducers';
import root_saga from 'redux-state/sagas';

const is_production = process.env.NODE_ENV === 'production';

// Creating store
let store = null;

const saga_middleware = createSagaMiddleware();

if (is_production) {
    // In production adding only thunk middleware
    const middleware = applyMiddleware(thunk, saga_middleware);

    store = createStore(
        root_reducer,
        middleware
    );
} else {
    // In development mode beside thunk
    // logger and DevTools are added
    const middleware = applyMiddleware(thunk, logger, saga_middleware);
    let enhancer;

    // Enable DevTools if browser extension is installed
    if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
        enhancer = compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
        );
    } else {
        enhancer = compose(middleware);
    }

    store = createStore(
        root_reducer,
        enhancer
    );
}

saga_middleware.run(root_saga, store.dispatch);

export default store;