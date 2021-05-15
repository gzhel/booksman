const ordersState = (root) => root?.ordersReducer;

const ordersList = (root) => ordersState(root)?.ordersList;

const orderInfo = (root) => ordersState(root)?.orderInfo;

export const ordersSelectors = {
    ordersList,
    orderInfo,
};