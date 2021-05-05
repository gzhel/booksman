import {ConfigActionTypes} from "./model";

const ShowPreloaderAction = (isShowPreloader) => ({
    payload: isShowPreloader,
    type: ConfigActionTypes.PRELOADER_PAGE_IS_SHOW,
});

const CheckAuthAction = (history) => ({
    payload: history,
    type: ConfigActionTypes.CHECK_AUTH,
});

const ShowErrorsAction = (errors) => ({
    payload: errors,
    type: ConfigActionTypes.SHOW_ERRORS,
});

export const configActions = {
    showPreloader: ShowPreloaderAction,
    checkAuth: CheckAuthAction,
    showErrors: ShowErrorsAction,
};
