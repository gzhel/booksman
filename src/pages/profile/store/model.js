export const profileInitial = {
    userInfo: [],
    userOrders: [],
    orderInfo: [],
    orderComments: [],
    showAddCashModal: false,
};

export const profileActionTypes = {
    GET_PROFILE_DATA: 'PROFILE.GET_PROFILE_DATA',
    GET_USER_INFO: 'PROFILE.GET_USER_INFO',
    GET_USER_ORDERS: 'PROFILE.GET_USER_ORDERS',
    GET_ORDER_DATA: 'PROFILE.GET_ORDER_DATA',
    GET_ORDER_INFO: 'PROFILE.GET_ORDER_INFO',
    GET_ORDER_COMMENTS: 'PROFILE.GET_ORDER_COMMENTS',
    ON_SHOW_ADD_CASH_MODAL: 'PROFILE.ON_SHOW_ADD_CASH_MODAL',
    ON_HIDE_ADD_CASH_MODAL: 'PROFILE.ON_HIDE_ADD_CASH_MODAL',
    ADD_CASH: 'PROFILE.ADD_CASH',
};
