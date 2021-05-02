const authState = (root) => root?.authReducer;

const login = (root) => authState(root)?.login;

const password = (root) => authState(root)?.password;

export const authSelectors ={
    login,
    password,
};
