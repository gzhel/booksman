import {connect} from "react-redux";
import {Modal} from "../../../utils/modal/Modal";
import {profileActions} from "../store/actions";
import React, {useState} from "react";
import {Trans} from "@lingui/macro";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(profileActions.onHideAddCashModal()),
    addCash: (cashValue) => dispatch(profileActions.addCash(cashValue)),
});

const ConnectedAddCashModal = ({onClose, addCash}) => {
    const [cashValue, setCashValue] = useState("");

    return (
        <Modal onCancel={onClose}>
            <div className={"mt-xl"}>
                <input type="text"
                       value={cashValue}
                       className={"input mr-md"}
                       onChange={(event) => setCashValue(event.target.value)}
                />
                <button className={"components__button--default"} onClick={() => addCash(cashValue)}>
                    <Trans id={"profile__add-cash"}>Add cash</Trans>
                </button>
            </div>
        </Modal>
    )
};

export const AddCashModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddCashModal);
