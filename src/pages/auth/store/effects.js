import {all, takeEvery} from "redux-saga/effects";

import {authActionTypes} from "./model";

export function* authEffects() {
    yield all([
        takeEvery(authActionTypes.ON_AUTH_CLICKED, onAuthClicked),
        takeEvery(authActionTypes.ON_INPUT_CHANGED, onInputChanged),
    ]);
}

function* onAuthClicked(action) {
    yield console.log("На апи идёт: ", action.payload)
}

function* onInputChanged(action) {
    const {name, value} = action.payload.target;
    yield console.log("Name", name, "Value", value);
}
