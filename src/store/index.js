import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {all} from "redux-saga/effects";
import thunk from "redux-thunk";
import {configReducer} from "../utils/config/store/reducer";

const composeEnhancers = typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({
    configReducer,
    // ...
});

function* rootEffects() {
    yield all([
        // fork(mainEffects);
    ])
}

const saga = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(thunk, saga));
const index = createStore(rootReducer, enhancer);

saga.run(rootEffects);

export default index;
