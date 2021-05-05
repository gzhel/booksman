import React from "react";
import {Provider} from "react-redux";
import Router from "./Router";
import store from "../store";
import {Preloader} from "../utils/config/Preloader";

const App = () => {
    return (
        <Provider store={store}>
            <Router/>
            <Preloader/>
        </Provider>
    )
};

export default App;
