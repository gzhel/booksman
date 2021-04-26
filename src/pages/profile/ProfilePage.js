import React from "react";
import {connect} from "react-redux";

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const ConnectedProfilePage = () => {
    return (
        <div className={"profile"}>
            It's profile page
        </div>
    );
};

export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(ConnectedProfilePage);
