import React from "react";
import {connect} from "react-redux";
import {configSelectors} from "./store/selectors";
import {Dots} from "react-preloaders2";

const mapStateToProps = (root) => ({
    isShowPreloader: configSelectors.isShowPreloader(root),
});

const ConnectedPreloader = ({isShowPreloader}) => {
    return isShowPreloader ?
        <Dots color={"#593f32"}
               background={isShowPreloader ? "blur" : "transparent"}
               time={1300}
               animation={"fade"}
        /> : null;
};

export const Preloader = connect(mapStateToProps)(ConnectedPreloader);
