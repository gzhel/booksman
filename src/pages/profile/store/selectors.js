const profileState = (root) => root?.profileReducer;

const userInfo = (root) => profileState(root)?.userInfo;

const userOrders = (root) => profileState(root)?.userOrders;

const orderInfo = (root) => profileState(root)?.orderInfo;

const orderComments = (root) => profileState(root)?.orderComments;

export const profileSelectors ={
    userInfo,
    userOrders,
    orderInfo,
    orderComments,
};