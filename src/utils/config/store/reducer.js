import {ConfigActionTypes, configStateInitial} from "./model";

export const configReducer = (state = configStateInitial, action) => {
    switch (action.type) {
        case ConfigActionTypes.PRELOADER_PAGE_IS_SHOW: {
            return {
                ...state,
                isShow: action.payload,
            }
        }
        default: {
            return state;
        }
    }
};