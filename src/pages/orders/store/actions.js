import {ordersActionTypes} from "./model";

const GetOrdersDataAction = () => ({
    payload: null,
    type: ordersActionTypes.GET_ORDERS_DATA,
});

const GetOrdersListAction = (ordersList) => ({
    payload: ordersList,
    type: ordersActionTypes.GET_ORDERS_LIST,
});

const GetOrderDataAction = (orderId) => ({
    payload: orderId,
    type: ordersActionTypes.GET_ORDER_DATA,
});

const GetOrderInfoAction = (orderId) => ({
    payload: orderId,
    type: ordersActionTypes.GET_ORDER_INFO,
});

export const ordersActions = {
    getOrdersData: GetOrdersDataAction,
    getOrdersList: GetOrdersListAction,
    getOrderData: GetOrderDataAction,
    getOrderInfo: GetOrderInfoAction,
};