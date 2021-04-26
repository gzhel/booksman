import {authActionTypes} from "./model";

const OnAuthClickedAction = (authData) => ({
    payload: authData,
    type: authActionTypes.ON_AUTH_CLICKED,
});

export const authActions = {
    onAuthClicked: OnAuthClickedAction,
};
