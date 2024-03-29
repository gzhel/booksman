export const configStateInitial = {
    isShowPreloader: false,
    isAuthorized: false,
    isShowErrors: false,
    language: 'en',
};

export const ConfigActionTypes = {
    PRELOADER_PAGE_IS_SHOW: 'CONFIG.PRELOADER_PAGE_IS_SHOW',
    CHECK_AUTH: 'CONFIG.CHECK_AUTH',
    SHOW_ERRORS: 'CONFIG.SHOW_ERRORS',
    LANGUAGE_CHANGE: 'CONFIG.LANGUAGE_CHANGE',
};
