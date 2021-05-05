import {all, select, takeEvery} from "redux-saga/effects";
import {ConfigActionTypes} from "./model";
import {configSelectors} from "./selectors";

export function* configEffects() {
    yield all([
        takeEvery(ConfigActionTypes.CHECK_AUTH, checkAuth),
    ]);
}

function* checkAuth(action) {
    try {
        const history = action.payload;
        const isAuthorized = yield select(configSelectors.isAuthorized);
        if (isAuthorized) {
            yield history.push('/profile');
        }
    } catch (error) {
        console.log("onAuthClicked error:", error);
    }
}
