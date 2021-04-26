import React, {useState} from "react";
import {connect} from "react-redux";
import BooksmanLogo from "../../assets/images/booksman_logo.png";
import {Redirect} from "react-router";
import {authActions} from "./store/actions";
import {authSelectors} from "./store/selectors";

const mapStateToProps = (root) => ({
    isAuthorized: authSelectors.isAuthorized(root),
});

const mapDispatchToProps = (dispatch) => ({
    onAuthClicked: (authData) => dispatch(authActions.onAuthClicked(authData)),
});

const ConnectedAuthPage = ({
    isAuthorized,
    onAuthClicked,
}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

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
                         width={140}
                         height={60}/>
                </div>
                <div className={"auth-page__content--field"}>
                    <label className={"label"}
                           htmlFor={"user-login"}>
                        Login
                    </label>
                    <input className={"input"}
                           type={"email"}
                           name={"user-login"}
                           id={"user-login"}
                           placeholder={"Type..."}
                           onChange={(evt) => setLogin(evt.target.value)}
                    />
                </div>
                <div className={"auth-page__content--field"}>
                    <label className={"label"}
                           htmlFor={"user-password"}>
                        Password
                    </label>
                    <input className={"input"}
                           type={"password"}
                           name={"user-password"}
                           id={"user-password"}
                           placeholder={"Type..."}
                           onChange={(evt) => setPassword(evt.target.value)}
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
