import {authActionTypes, authInitial} from "./model";

export const authReducer = (state = authInitial, action) => {
    switch (action.type) {
        case authActionTypes.ON_AUTH_CLICKED: {
            // тут вместо этой логики ничего не будет, но в effect будет отправлен объект с login и password
            return {
                ...state,
                isAuthorized: true,
            }
        }

        default: {
            return state;
        }
    }
};
