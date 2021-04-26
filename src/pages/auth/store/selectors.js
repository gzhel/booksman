const authState = (root) => root?.authReducer;

const isAuthorized = (root) => authState(root)?.isAuthorized;

export const authSelectors ={
    isAuthorized,
};
