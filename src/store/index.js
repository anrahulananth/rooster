import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import rootSaga from "../sagas";

import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer, 
    compose(
        applyMiddleware(logger, sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);

export default store;
