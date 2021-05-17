import {connect} from "react-redux";
import React from "react";
import {marketActions} from "../../store/actions";
import {Modal} from "../../../../utils/modal/Modal";
import {Trans} from "@lingui/macro";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(marketActions.onHideBuyFailedModal()),
});

const ConnectedBuyFailedModal = ({onClose}) => {

    return (
        <Modal onCancel={onClose}>
            <div className={"mt-xl"}>
                <h2><Trans id={"market__failed"}>You hadn't enough money to pay it!</Trans></h2>
                <button className={"components__button--default market__buy-modal--button"}
                        onClick={onClose}
                        style={{margin: "0 auto"}}>
                    OK
                </button>
            </div>
        </Modal>
    )
};

export const BuyFailedModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedBuyFailedModal);
