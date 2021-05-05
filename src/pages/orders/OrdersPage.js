import {connect} from "react-redux";
import React from "react";

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const ConnectedOrdersPage = () => {
    return (
        <div className={"orders page__background"}>It's orders page</div>
    )
};

export const OrdersPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedOrdersPage);
