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
import {marketReducer} from "../pages/market/store/reducer";
import {marketEffects} from "../pages/market/store/effects";
import {ordersReducer} from "../pages/orders/store/reducer";
import {ordersEffects} from "../pages/orders/store/effects";

const composeEnhancers = typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({
    configReducer,
    authReducer,
    modalReducer,
    profileReducer,
    marketReducer,
    ordersReducer,
});

function* rootEffects() {
    yield all([
        fork(configEffects),
        fork(authEffects),
        fork(modalEffects),
        fork(profileEffects),
        fork(marketEffects),
        fork(ordersEffects),
    ])
}

const saga = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(thunk, saga));
const index = createStore(rootReducer, enhancer);

saga.run(rootEffects);

export default index;
