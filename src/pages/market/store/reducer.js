import {marketActionTypes, marketInitial} from "./model";

export const marketReducer = (state = marketInitial, action) => {
    switch (action.type) {
        case marketActionTypes.GET_BOOKS_LIST: {
            const booksList = action.payload;

            return {
                ...state,
                booksList: booksList,
            }
        }

        case marketActionTypes.GET_BOOK_INFO: {
            const bookInfo = action.payload;

            return {
                ...state,
                bookInfo: bookInfo,
            }
        }

        case marketActionTypes.GET_BOOK_COMMENTS: {
            const bookComments = action.payload;

            return {
                ...state,
                bookComments: bookComments,
            }
        }

        case marketActionTypes.ON_SHOW_BUY_MODAL: {
            return {
                ...state,
                showBuyModal: true,
            }
        }

        case marketActionTypes.ON_HIDE_BUY_MODAL: {
            return {
                ...state,
                showBuyModal: false,
            }
        }

        case marketActionTypes.ON_SHOW_BUY_SUCCESS_MODAL: {
            return {
                ...state,
                showBuySuccessModal: true,
            }
        }

        case marketActionTypes.ON_HIDE_BUY_SUCCESS_MODAL: {
            return {
                ...state,
                showBuySuccessModal: false,
            }
        }

        case marketActionTypes.ON_SHOW_BUY_FAILED_MODAL: {
            return {
                ...state,
                showBuyFailedModal: true,
            }
        }

        case marketActionTypes.ON_HIDE_BUY_FAILED_MODAL: {
            return {
                ...state,
                showBuyFailedModal: false,
            }
        }

        default: {
            return state;
        }
    }
};
