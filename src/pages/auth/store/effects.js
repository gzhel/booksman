import {all, takeEvery, put} from "redux-saga/effects";

import {authActionTypes} from "./model";
import {authApiService} from "../AuthPage.ApiService";
import {configActions} from "../../../utils/config/store/actions";

export function* authEffects() {
    yield all([
        takeEvery(authActionTypes.ON_AUTH_CLICKED, onAuthClicked),
    ]);
}

function* onAuthClicked(action) {
    try {
        const {login, password, history} = action.payload;
        const authFields = {log: login, pass: password};
        const userId = yield authApiService.signIn(authFields);
        yield localStorage.setItem('booksmanUserId', userId.data);
        yield put(configActions.checkAuth(history));
    } catch (error) {
        yield console.log("onAuthClicked error:", onAuthClicked);
    }
}
