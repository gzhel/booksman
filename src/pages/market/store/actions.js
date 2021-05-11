import {marketActionTypes} from "./model";

const GetMarketDataAction = () => ({
    payload: null,
    type: marketActionTypes.GET_MARKET_DATA,
});

const GetBooksListAction = () => ({
    payload: null,
    type: marketActionTypes.GET_BOOKS_LIST,
});

const GetBookDataAction = (bookId) => ({
    payload: bookId,
    type: marketActionTypes.GET_BOOK_DATA,
});

const GetBookInfoAction = (bookId) => ({
    payload: bookId,
    type: marketActionTypes.GET_BOOK_INFO,
});

const GetBookCommentsAction = (bookId) => ({
    payload: bookId,
    type: marketActionTypes.GET_BOOK_COMMENTS,
});

const OnShowBuyModalAction = () => ({
    payload: null,
    type: marketActionTypes.ON_SHOW_BUY_MODAL,
});

const OnHideBuyModalAction = () => ({
    payload: null,
    type: marketActionTypes.ON_HIDE_BUY_MODAL,
});

const OnShowBuySuccessModalAction = () => ({
    payload: null,
    type: marketActionTypes.ON_SHOW_BUY_SUCCESS_MODAL,
});

const OnHideBuySuccessModalAction = () => ({
    payload: null,
    type: marketActionTypes.ON_HIDE_BUY_SUCCESS_MODAL,
});

const OnShowBuyFailedModalAction = () => ({
    payload: null,
    type: marketActionTypes.ON_SHOW_BUY_FAILED_MODAL,
});

const OnHideBuyFailedModalAction = () => ({
    payload: null,
    type: marketActionTypes.ON_HIDE_BUY_FAILED_MODAL,
});

export const marketActions = {
    getBooksList: GetBooksListAction,
    getBookData: GetBookDataAction,
    getBookInfo: GetBookInfoAction,
    getBookComments: GetBookCommentsAction,
    onShowBuyModal: OnShowBuyModalAction,
    onHideBuyModal: OnHideBuyModalAction,
    onShowBuySuccessModal: OnShowBuySuccessModalAction,
    onHideBuySuccessModal: OnHideBuySuccessModalAction,
    onShowBuyFailedModal: OnShowBuyFailedModalAction,
    onHideBuyFailedModal: OnHideBuyFailedModalAction,
    getMarketData: GetMarketDataAction,
};
