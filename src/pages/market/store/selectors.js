const marketState = (root) => root?.marketReducer;

const booksList = (root) => marketState(root)?.booksList;

const bookInfo = (root) => marketState(root)?.bookInfo;

const bookComments = (root) => marketState(root)?.bookComments;

const showBuyModal = (root) => marketState(root)?.showBuyModal;

const showBuySuccessModal = (root) => marketState(root)?.showBuySuccessModal;

const showBuyFailedModal = (root) => marketState(root)?.showBuyFailedModal;

export const marketSelectors = {
    booksList,
    bookInfo,
    bookComments,
    showBuyModal,
    showBuySuccessModal,
    showBuyFailedModal,
};
