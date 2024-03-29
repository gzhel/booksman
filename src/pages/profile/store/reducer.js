import {profileActionTypes, profileInitial} from "./model";

export const profileReducer = (state = profileInitial, action) => {
    switch (action.type) {
        case profileActionTypes.GET_USER_INFO: {
            const userInfo = action.payload;

            return {
                ...state,
                userInfo: userInfo,
            }
        }

        case profileActionTypes.GET_USER_ORDERS: {
            const userOrders = action.payload;

            return {
                ...state,
                userOrders: userOrders,
            }
        }

        case profileActionTypes.GET_ORDER_INFO: {
            const orderInfo = action.payload;

            return {
                ...state,
                orderInfo: orderInfo,
            }
        }

        case profileActionTypes.GET_ORDER_COMMENTS: {
            const orderComments = action.payload;

            return {
                ...state,
                orderComments: orderComments,
            }
        }

        case profileActionTypes.ON_SHOW_ADD_CASH_MODAL: {
            return {
                ...state,
                showAddCashModal: true,
            }
        }

        case profileActionTypes.ON_HIDE_ADD_CASH_MODAL: {
            return {
                ...state,
                showAddCashModal: false,
            }
        }

        default: {
            return state;
        }
    }
};
