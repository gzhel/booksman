import {ModalActionTypes, modalStateInitial} from "./model";

export const modalReducer = (state = modalStateInitial, action) => {
    switch (action.type) {
        case ModalActionTypes.CLOSE_MODAL : {
            const modal = action.payload;
            return {
                ...state,
                modals: (!modal) ? [] : state.modals.filter((item) => item.modal !== modal),
            };
        }

        case ModalActionTypes.SHOW_MODAL: {
            return {
                ...state,
                modals: [
                    ...state.modals,
                    action.payload,
                ],
            };
        }

        default: {
            return state;
        }
    }
};
