import {all, takeEvery} from "redux-saga/effects";
import {ModalActionTypes} from "./model";
import {Put} from "../../helper";
import {modalActions} from "./actions";

export function* modalEffects() {
    yield all([
        takeEvery(ModalActionTypes.ON_CLOSE_MODAL_CLICKED, Put(modalActions.closeModal)),
        takeEvery(ModalActionTypes.ON_SHOW_MODAL_CLICKED, Put(modalActions.showModal)),
    ]);
}
