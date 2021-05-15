import {all, takeEvery, put} from "redux-saga/effects";
import {ordersActionTypes} from "./model";
import {ordersApiService} from "../OrdersPage.ApiService";
import {ordersActions} from "./actions";

export function* ordersEffects() {
    yield all([
        takeEvery(ordersActionTypes.GET_ORDERS_DATA, getOrdersData),
        takeEvery(ordersActionTypes.GET_ORDER_DATA, getOrderData),
    ])
}

function* getOrdersData() {
    try {
        const userId = localStorage.getItem("booksmanUserId");
        const ordersList = yield ordersApiService.getOrdersList(userId);
        yield put(ordersActions.getOrdersList(ordersList.data));
    } catch (error) {
        yield console.log("getOrdersData error:", error);
    }
}

function* getOrderData(action) {
    try {
        const bookId = action.payload;
        const userId = localStorage.getItem("booksmanUserId");
        const orderInfo = yield ordersApiService.getOrderInfo({userId, bookId});
        yield put(ordersActions.getOrderInfo(orderInfo.data[0]));
    } catch (error) {
        yield console.log("getOrderData error:", error);
    }
}