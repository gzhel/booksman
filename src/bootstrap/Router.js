import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import {Route} from "react-router";
import {AuthPage} from "../pages/auth/AuthPage";
import {LayoutRouter} from "./layout/LayoutRouter";
import {ProfilePage} from "../pages/profile/ProfilePage";
import {ConfigPage} from "../pages/config/ConfigPage";

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={ConfigPage}/>
                <Route path={"/auth"} component={AuthPage}/>
                <LayoutRouter path={"/profile"} component={ProfilePage}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;
