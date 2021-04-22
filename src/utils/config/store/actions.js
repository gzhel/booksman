import {ConfigActionTypes} from "./model";

const ShowPreloaderAction = (isShow) => ({
    payload: isShow,
    type: ConfigActionTypes.PRELOADER_PAGE_IS_SHOW,
});

export const configActions = {
    showPreloader: ShowPreloaderAction,
};