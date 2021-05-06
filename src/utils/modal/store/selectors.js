const modalState = (root) => root.modalReducer;

const modals = (root) => modalState(root).modals;

const isModalOpened = (root) => !!modals(root)?.length;

export const modalSelectors = {
    modals,
    modalState,
    isModalOpened,
};
