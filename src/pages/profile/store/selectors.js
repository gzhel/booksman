const profileState = (root) => root?.profileReducer;

const userInfo = (root) => profileState(root)?.userInfo;

const userOrders = (root) => profileState(root)?.userOrders;

const orderInfo = (root) => profileState(root)?.orderInfo;

const orderComments = (root) => profileState(root)?.orderComments;

const showAddCashModal = (root) => profileState(root)?.showAddCashModal;

export const profileSelectors ={
    userInfo,
    userOrders,
    orderInfo,
    orderComments,
    showAddCashModal,
};