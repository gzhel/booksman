export const marketInitial = {
    booksList: [],
    bookInfo: [],
    bookComments: [],
    showBuyModal: false,
    showBuySuccessModal: false,
    showBuyFailedModal: false,
};

export const marketActionTypes = {
    GET_MARKET_DATA: 'MARKET.GET_MARKET_DATA',
    GET_BOOKS_LIST: 'MARKET.GET_BOOKS_LIST',
    GET_BOOK_DATA: 'MARKET.GET_BOOK_DATA',
    GET_BOOK_INFO: 'MARKET.GET_BOOK_INFO',
    GET_BOOK_COMMENTS: 'MARKET.GET_BOOK_COMMENTS',
    ON_SHOW_BUY_MODAL: 'MARKET.ON_SHOW_BUY_MODAL',
    ON_HIDE_BUY_MODAL: 'MARKET.ON_HIDE_BUY_MODAL',
    ON_BUY_BUTTON_CLICKED: 'MARKET.ON_BUY_BUTTON_CLICKED',
    ON_SHOW_BUY_SUCCESS_MODAL: 'MARKET.ON_SHOW_BUY_SUCCESS_MODAL',
    ON_HIDE_BUY_SUCCESS_MODAL: 'MARKET.ON_HIDE_BUY_SUCCESS_MODAL',
    ON_SHOW_BUY_FAILED_MODAL: 'MARKET.ON_SHOW_BUY_FAILED_MODAL',
    ON_HIDE_BUY_FAILED_MODAL: 'MARKET.ON_HIDE_BUY_FAILED_MODAL',
};
