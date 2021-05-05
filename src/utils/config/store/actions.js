import {ConfigActionTypes} from "./model";

const ShowPreloaderAction = (isShowPreloader) => ({
    payload: isShowPreloader,
    type: ConfigActionTypes.PRELOADER_PAGE_IS_SHOW,
});

const CheckAuthAction = (history) => ({
    payload: history,
    type: ConfigActionTypes.CHECK_AUTH,
});

export const configActions = {
    showPreloader: ShowPreloaderAction,
    checkAuth: CheckAuthAction,
};
