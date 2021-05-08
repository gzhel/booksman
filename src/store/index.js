import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {all, fork} from "redux-saga/effects";
import thunk from "redux-thunk";
import {configReducer} from "../utils/config/store/reducer";
import {authReducer} from "../pages/auth/store/reducer";
import {authEffects} from "../pages/auth/store/effects";
import {configEffects} from "../utils/config/store/effects";
import {modalReducer} from "../utils/modal/store/reducer";
import {modalEffects} from "../utils/modal/store/effects";
import {profileReducer} from "../pages/profile/store/reducer";
import {profileEffects} from "../pages/profile/store/effects";

const composeEnhancers = typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({
    configReducer,
    authReducer,
    modalReducer,
    profileReducer,
});

function* rootEffects() {
    yield all([
        fork(configEffects),
        fork(authEffects),
        fork(modalEffects),
        fork(profileEffects),
    ])
}

const saga = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(thunk, saga));
const index = createStore(rootReducer, enhancer);

saga.run(rootEffects);

export default index;
