import {all, takeEvery, put} from "redux-saga/effects";

import {marketActionTypes} from "./model";
import {marketApiService} from "../MarketPage.ApiService";
import {marketActions} from "./actions";

export function* marketEffects() {
    yield all([
        takeEvery(marketActionTypes.GET_MARKET_DATA, getMarketData),
        takeEvery(marketActionTypes.GET_BOOK_DATA, getBookData),
        takeEvery(marketActionTypes.ON_BUY_BUTTON_CLICKED, onBuyButtonClicked),
    ])
}

function* getMarketData() {
    try {
        const booksList = yield marketApiService.getBooksList();
        yield put(marketActions.getBooksList(booksList.data));
    } catch (error) {
        yield console.log("getMarketData error:", error);
    }
}

function* getBookData(action) {
    try {
        const bookId = action.payload;
        const bookInfo = yield marketApiService.getBookInfo(bookId);
        const bookComments = yield marketApiService.getBookComments(bookId);
        yield put(marketActions.getBookInfo(bookInfo.data));
        yield put(marketActions.getBookComments(bookComments.data));
    } catch (error) {
        yield console.log("getBookData error:", error);
    }
}

function* onBuyButtonClicked(action) {
    try {
        const {bookId, postId} = action.payload;
        const userId = localStorage.getItem("booksmanUserId");
        yield marketApiService.buyBook({bookId, userId, postId});
        yield put(marketActions.onHideBuyModal());
        yield put(marketActions.onShowBuySuccessModal());
    } catch (error) {
        yield console.log("onBuyButtonClicked error:", error);
        yield put(marketActions.onHideBuyModal());
        yield put(marketActions.onShowBuyFailedModal());
    }
}