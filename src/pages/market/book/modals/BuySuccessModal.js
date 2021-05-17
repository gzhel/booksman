import {connect} from "react-redux";
import React from "react";
import {marketActions} from "../../store/actions";
import {Modal} from "../../../../utils/modal/Modal";
import {Trans} from "@lingui/macro";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(marketActions.onHideBuySuccessModal()),
});

const ConnectedBuySuccessModal = ({onClose}) => {

    return (
        <Modal onCancel={onClose}>
            <div className={"mt-xl"}>
                <h2><Trans id={"market__success"}>Your purchase was successful!</Trans></h2>
                <button className={"components__button--default market__buy-modal--button"}
                        onClick={onClose}
                        style={{margin: "0 auto"}}>
                    OK
                </button>
            </div>
        </Modal>
    )
};

export const BuySuccessModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedBuySuccessModal);
