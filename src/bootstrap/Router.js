import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import {Route} from "react-router";
import {AuthPage} from "../pages/auth/AuthPage";
import {LayoutRouter} from "./layout/LayoutRouter";
import {ProfilePage} from "../pages/profile/ProfilePage";
import {ConfigPage} from "../pages/config/ConfigPage";
import {MarketPage} from "../pages/market/MarketPage";
import {OrdersPage} from "../pages/orders/OrdersPage";
import {ProfileOrderPage} from "../pages/profile/order/ProfileOrderPage";
import {MarketBookPage} from "../pages/market/book/MarketBookPage";

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={ConfigPage}/>
                <Route path={"/auth"} component={AuthPage}/>
                <LayoutRouter exact path={"/profile"} component={ProfilePage}/>
                <LayoutRouter path={`/profile/orders/:orderId`} component={ProfileOrderPage}/>
                <LayoutRouter exact path={"/market"} component={MarketPage}/>
                <LayoutRouter path={`/market/book/:bookId`} component={MarketBookPage}/>
                <LayoutRouter path={"/orders"} component={OrdersPage}/>
                {/*<LayoutRouter path={"/chat"} component={ChatPage}/>*/}
            </Switch>
        </BrowserRouter>
    )
};

export default Router;
