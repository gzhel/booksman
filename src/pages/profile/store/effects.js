import {all, takeEvery, put} from "redux-saga/effects";

import {profileActionTypes} from "./model";
import {profileApiService} from "../ProfilePage.ApiService";
import {profileActions} from "./actions";

export function* profileEffects() {
    yield all([
        takeEvery(profileActionTypes.GET_PROFILE_DATA, getProfileData),
        takeEvery(profileActionTypes.GET_ORDER_DATA, getOrderData),
        takeEvery(profileActionTypes.ADD_CASH, addCash),
    ]);
}

function* getProfileData() {
    try {
        const userId = localStorage.getItem("booksmanUserId");
        const userInfo = yield profileApiService.getUserInfo(userId);
        const userOrders = yield profileApiService.getUserOrders(userId);
        yield put(profileActions.getUserInfo(userInfo.data));
        yield put(profileActions.getUserOrders(userOrders.data));
    } catch (error) {
        yield console.log("getProfileData error:", error);
    }
}

function* getOrderData(action) {
    try {
        const orderId = action.payload;
        const orderInfo = yield profileApiService.getSelectedBookInfo(orderId);
        const orderComments = yield profileApiService.getSelectedBookComments(orderId);
        yield put(profileActions.getOrderInfo(orderInfo.data));
        yield put(profileActions.getOrderComments(orderComments.data));
    } catch (error) {
        yield console.log("getOrderData error:", error);
    }
}

function* addCash(action) {
    try {
        const cashValue = action.payload;
        const userId = localStorage.getItem("booksmanUserId");
        yield profileApiService.addCash({cashValue, userId});
    } catch (error) {
        yield console.log("addCash error:", error);
    }
}