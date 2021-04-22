import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import thunk from "redux-thunk";

const composeEnhancers = typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

function* rootEffects() {
    yield all([
        // fork(mainEffects);
    ])
}

const saga = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(thunk, saga));
const store = createStore(rootReducer, enhancer);

saga.run(rootEffects);

export default store;
