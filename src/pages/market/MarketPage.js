import {connect} from "react-redux";
import React from "react";

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const ConnectedMarketPage = () => {
    return (
        <div className={"market page__background"}>It's market page</div>
    )
};

export const MarketPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedMarketPage);
