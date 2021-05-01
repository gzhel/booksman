import axios from "axios";
import store from "../store";
import {configActions} from "./config/store/actions";

export const publicApi = axios.create({
    baseURL: "https://tokyoapi.azurewebsites.net/api",
});

export const staticApi = axios.create({
    baseURL: "/",
});

publicApi.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const status = error.response.status;
    const {details: errorDetails} = error.response.data;

    // eslint-disable-next-line default-case
    switch (status) {
        case 401 :
            console.log("401 details: ", errorDetails);
            break;
        case 500 :
            console.log("500 details: ", errorDetails);
            break;
    }

    store.dispatch(configActions.showPreloader(false));
    return Promise.reject(error);
});
