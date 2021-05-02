import React from "react";
import {Route} from "react-router-dom";
import Layout from "./Layout";
import {Redirect} from "react-router";

export const LayoutRouter = ({component: Component, ...rest}) => {
    const isAuthorized = localStorage.getItem("booksmanUserId") !== null;

    const renderFunc = (matchProps) => (
        <Layout>
            <Component {...matchProps}/>
        </Layout>
    );

    return isAuthorized ? <Route {...rest} render={renderFunc}/> : <Redirect to={"/auth"}/>;
};
