import {connect} from "react-redux";
import React from "react";
import Modal from 'react-modal';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const ConnectedOrderModal = ({bookId}) => {
    return (
        <Modal>
            It's order modal
        </Modal>
    )
};

export const OrderModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedOrderModal);
