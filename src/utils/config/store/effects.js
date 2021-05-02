import {all, select, takeEvery} from "redux-saga/effects";
import {ConfigActionTypes} from "./model";
import {configSelectors} from "./selectors";

export function* configEffects() {
    yield all([
        takeEvery(ConfigActionTypes.CHECK_AUTH, checkAuth),
    ]);
}

function* checkAuth() {
    try {
        const isAuthorized = yield select(configSelectors.isAuthorized);
        yield console.log('isAuthorized', isAuthorized);

    } catch (error) {
        console.log("onAuthClicked error:", error);
    }
}