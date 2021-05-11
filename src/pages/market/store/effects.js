import {all, takeEvery, put} from "redux-saga/effects";

import {marketActionTypes} from "./model";
import {marketApiService} from "../MarketPage.ApiService";
import {marketActions} from "./actions";

export function* marketEffects() {
    yield all([
        takeEvery(marketActionTypes.GET_MARKET_DATA, getMarketData),
        // takeEvery(marketActionTypes.GET_BOOK_DATA, getBookData),
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
