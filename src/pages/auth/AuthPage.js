import React, {useEffect} from "react";
import {connect} from "react-redux";
import BooksmanLogo from "../../assets/images/booksman_logo.png";
import {Redirect} from "react-router";
import {authActions} from "./store/actions";
import {authSelectors} from "./store/selectors";
import {configSelectors} from "../../utils/config/store/selectors";
import {configActions} from "../../utils/config/store/actions";

const mapStateToProps = (root) => ({
    isAuthorized: configSelectors.isAuthorized(root),
    login: authSelectors.login(root),
    password: authSelectors.password(root),
});

const mapDispatchToProps = (dispatch) => ({
    onAuthClicked: (authData) => dispatch(authActions.onAuthClicked(authData)),
    onInputChanged: (event) => dispatch(authActions.onInputChanged(event)),
    checkAuth: () => dispatch(configActions.checkAuth()),
});

const ConnectedAuthPage = ({
    isAuthorized,
    onAuthClicked,
    onInputChanged,
    login,
    password,
    checkAuth,
}) => {

    useEffect(() => {
        checkAuth();
    }, [isAuthorized]); // eslint-disable-line

    return isAuthorized ? <Redirect to={"/profile"} /> : (
        <div className={"auth-page"}>
            <header className={"auth-page__header"}>
                <button className={"components__button--language-ru"}
                        onClick={() => console.log("Switch to Russian")}>
                    Русский
                </button>
                <button className={"components__button--language-en"}
                        onClick={() => console.log("Switch to English")}>
                    English
                </button>
            </header>
            <section className={"auth-page__content"}>
                <div className={"auth-page__content--logo"}>
                    <img src={BooksmanLogo}
                         alt={"BooksmanLogo"}
                         width={147}
                         height={166}/>
                </div>
                <div className={"auth-page__content--field"}>
                    <label className={"label"}
                           htmlFor={"login"}>
                        Login:
                    </label>
                    <input className={"input"}
                           type={"email"}
                           name={"login"}
                           id={"login"}
                           placeholder={"Type..."}
                           onChange={onInputChanged}
                    />
                </div>
                <div className={"auth-page__content--field"}>
                    <label className={"label"}
                           htmlFor={"password"}>
                        Password:
                    </label>
                    <input className={"input"}
                           type={"password"}
                           name={"password"}
                           id={"password"}
                           placeholder={"Type..."}
                           onChange={onInputChanged}
                    />
                </div>
                <div className={"auth-page__content--submit"}>
                    <button className={"components__button--default"}
                            type={"button"}
                            onClick={() => onAuthClicked({login, password})}>
                        Sign in
                    </button>
                </div>
            </section>
            <footer className={"auth-page__footer"}>
                <p className={"auth-page__footer--copyright"}>
                    © 2021 Gregory Zhelyabin.
                </p>
            </footer>
        </div>
    );
};

export const AuthPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedAuthPage);
