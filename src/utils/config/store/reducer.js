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

        case ConfigActionTypes.SHOW_ERRORS: {
            const isShowErrors = action.payload;

            return {
                ...state,
                isShowErrors: isShowErrors,
            }
        }

        case ConfigActionTypes.LANGUAGE_CHANGE: {
            const language = action.payload;

            return {
                ...state,
                language: language,
            }
        }

        default: {
            return state;
        }
    }
};
