import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import {Route} from "react-router";
import {AuthPage} from "../pages/auth/AuthPage";

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/auth"} component={AuthPage}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;
