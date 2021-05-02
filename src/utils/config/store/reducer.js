import {ConfigActionTypes, configStateInitial} from "./model";

export const configReducer = (state = configStateInitial, action) => {
    switch (action.type) {
        case ConfigActionTypes.PRELOADER_PAGE_IS_SHOW: {
            return {
                ...state,
                isShowPreloader: action.payload,
            }
        }

        case ConfigActionTypes.CHECK_AUTH: {
            const isAuthorized = localStorage.getItem("booksmanUserId") !== null;

            return {
                ...state,
                isAuthorized: isAuthorized,
            }
        }

        default: {
            return state;
        }
    }
};