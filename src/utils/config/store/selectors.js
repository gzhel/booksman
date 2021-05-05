const configState = (root) => root?.configReducer;

const isAuthorized = (root) => configState(root)?.isAuthorized;

const isShowPreloader = (root) => configState(root)?.isShowPreloader;

const isShowErrors = (root) => configState(root)?.isShowErrors;

export const configSelectors ={
    isAuthorized,
    isShowPreloader,
    isShowErrors,
};
