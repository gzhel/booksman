import {authActionTypes} from "./model";

const OnAuthClickedAction = (authData) => ({
    payload: authData,
    type: authActionTypes.ON_AUTH_CLICKED,
});

const OnInputChangedAction = (event) => ({
    payload: event,
    type: authActionTypes.ON_INPUT_CHANGED,
});

export const authActions = {
    onAuthClicked: OnAuthClickedAction,
    onInputChanged: OnInputChangedAction,
};
