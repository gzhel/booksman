import {authActionTypes, authInitial} from "./model";

export const authReducer = (state = authInitial, action) => {
    switch (action.type) {
        case authActionTypes.ON_INPUT_CHANGED: {
            const {name, value} = action.payload.target;

            return {
                ...state,
                [name] : value,
            }
        }

        default: {
            return state;
        }
    }
};
