const authState = (root) => root?.authReducer;

const isAuthorized = (root) => authState(root)?.isAuthorized;

const login = (root) => authState(root)?.login;

const password = (root) => authState(root)?.password;

export const authSelectors ={
    isAuthorized,
    login,
    password,
};
