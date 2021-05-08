import {profileActionTypes} from "./model";

const GetProfileDataAction = () => ({
    payload: null,
    type: profileActionTypes.GET_PROFILE_DATA,
});

const GetUserInfoAction = (userInfo) => ({
    payload: userInfo,
    type: profileActionTypes.GET_USER_INFO,
});

const GetUserOrdersAction = (userOrders) => ({
    payload: userOrders,
    type: profileActionTypes.GET_USER_ORDERS,
});

const GetOrderDataAction = (orderId) => ({
    payload: orderId,
    type: profileActionTypes.GET_ORDER_DATA,
});

const GetOrderInfoAction = (orderInfo) => ({
    payload: orderInfo,
    type: profileActionTypes.GET_ORDER_INFO,
});

const GetOrderCommentsAction = (orderComments) => ({
    payload: orderComments,
    type: profileActionTypes.GET_ORDER_COMMENTS,
});

export const profileActions = {
    getProfileData: GetProfileDataAction,
    getUserInfo: GetUserInfoAction,
    getUserOrders: GetUserOrdersAction,
    getOrderData: GetOrderDataAction,
    getOrderInfo: GetOrderInfoAction,
    getOrderComments: GetOrderCommentsAction,
};