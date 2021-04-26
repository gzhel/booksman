import React from "react";
import {Route} from "react-router-dom";
import Layout from "./Layout";

export const LayoutRouter = ({component: Component, ...rest}) => {
    const renderFunc = (matchProps) => (
        <Layout>
            <Component {...matchProps}/>
        </Layout>
    );

    return <Route {...rest} render={renderFunc}/>;
};
