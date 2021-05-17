import React, {useEffect} from "react";
import {connect} from "react-redux";
import BooksmanLogo from "../../assets/images/booksman_logo.png";
import {Redirect, useHistory} from "react-router";
import {authActions} from "./store/actions";
import {authSelectors} from "./store/selectors";
import {configSelectors} from "../../utils/config/store/selectors";
import {configActions} from "../../utils/config/store/actions";
import {Trans} from "@lingui/macro";

const mapStateToProps = (root) => ({
    isAuthorized: configSelectors.isAuthorized(root),
    login: authSelectors.login(root),
    password: authSelectors.password(root),
    isShowPreloader: configSelectors.isShowPreloader(root),
    isShowErrors: configSelectors.isShowErrors(root),
});

const mapDispatchToProps = (dispatch) => ({
    onAuthClicked: (authData) => dispatch(authActions.onAuthClicked(authData)),
    onInputChanged: (event) => dispatch(authActions.onInputChanged(event)),
    showErrors: (errors) => dispatch(configActions.showErrors(errors)),
    languageChange: (language) => dispatch(configActions.languageChange(language)),
});

const ConnectedAuthPage = ({
    isAuthorized,
    onAuthClicked,
    onInputChanged,
    login,
    password,
    isShowPreloader,
    isShowErrors,
    showErrors,
    languageChange,
}) => {

    useEffect(() => {
        return () => showErrors(false);
    }, []); // eslint-disable-line

    const history = useHistory();

    return isAuthorized ? <Redirect to={"/profile"} /> : (
        <div className={"auth-page"} style={isShowPreloader ? {filter: "blur(5px)"} : {filter: "none"}}>
            <header className={"auth-page__header"}>
                <button className={"components__button--language-ru"}
                        onClick={() => languageChange('ru')}>
                    Русский
                </button>
                <button className={"components__button--language-en"}
                        onClick={() => languageChange('en')}>
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
                        <Trans id={"auth-page__login"}>Login:</Trans>
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
                        <Trans id={"auth-page__password"}>Password:</Trans>
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
                            onClick={() => onAuthClicked({login, password, history})}>
                        <Trans id={"auth-page__sign-in"}>Sign in</Trans>
                    </button>
                </div>
                {isShowErrors &&
                    <label style={{color: "red", margin: "0 auto -30px auto",}}>
                        <Trans id={"auth-page__error"}>
                            Not all fields are filled in!
                        </Trans>
                    </label>
                }
            </section>
            <footer className={"auth-page__footer"}>
                <p className={"auth-page__footer--copyright"}>
                    <Trans id={"auth-page__gregory-zhelyabin"}>© 2021 Gregory Zhelyabin.</Trans>
                </p>
            </footer>
        </div>
    );
};

export const AuthPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedAuthPage);
