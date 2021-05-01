import {all, takeEvery} from "redux-saga/effects";

import {authActionTypes} from "./model";
import {authApiService} from "../AuthPage.ApiService";

export function* authEffects() {
    yield all([
        takeEvery(authActionTypes.ON_AUTH_CLICKED, onAuthClicked),
    ]);
}

function* onAuthClicked(action) {
    try {
        const {login, password} = action.payload;
        const authFields = {log: login, pass: password};
        const userId = yield authApiService.signIn(authFields);
        yield localStorage.setItem('booksmanUserId', userId.data);

    } catch (error) {
        yield console.log("onAuthClicked error:", onAuthClicked);
    }
}