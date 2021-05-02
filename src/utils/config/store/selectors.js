const configState = (root) => root?.configReducer;

const isAuthorized = (root) => configState(root)?.isAuthorized;

const isShowPreloader = (root) => configState(root)?.isShowPreloader;

export const configSelectors ={
    isAuthorized,
    isShowPreloader,
};
