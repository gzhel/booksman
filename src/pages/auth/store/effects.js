import {all, takeEvery} from "redux-saga/effects";

import {authActionTypes} from "./model";

export function* authEffects() {
    yield all([
        takeEvery(authActionTypes.ON_AUTH_CLICKED, onAuthClicked),
    ]);
}

function* onAuthClicked(action) {
    yield console.log("На апи идёт: ", action.payload)
}
