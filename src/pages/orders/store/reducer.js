import {ordersActionTypes, ordersInitial} from "./model";

export const ordersReducer = (state = ordersInitial, action) => {
    switch (action.type) {
        case ordersActionTypes.GET_ORDERS_LIST: {
            const ordersList = action.payload;

            return {
                ...state,
                ordersList: ordersList,
            }
        }

        case ordersActionTypes.GET_ORDER_INFO: {
            const orderInfo = action.payload;

            return {
                ...state,
                orderInfo: orderInfo,
            }
        }

        default: {
            return state;
        }
    }
};