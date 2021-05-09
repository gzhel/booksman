import {ModalActionTypes} from "./model";

const CloseModalAction = (modalData) => ({
    payload: modalData,
    type: ModalActionTypes.CLOSE_MODAL,
});

const ShowModalAction = (modalData) => ({
    payload: modalData,
    type: ModalActionTypes.SHOW_MODAL,
});

export const modalActions = {
    closeModal: CloseModalAction,
    showModal: ShowModalAction,
};
