import React from "react";
import BooksmanLogo from "../../assets/images/booksman_logo.png";
import {connect} from "react-redux";
import {LinkRouter} from "../../components/link-router";
import {useHistory} from "react-router";
import {configActions} from "../../utils/config/store/actions";
import {Trans} from "@lingui/macro";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    languageChange: (language) => dispatch(configActions.languageChange(language)),
});

const ConnectedLayout = ({children, path, languageChange}) => {

    const history = useHistory();

    const onLogoutClicked = () => {
        localStorage.removeItem("booksmanUserId");
        history.push('/');
    };

    return (
        <div className={"layout"}>
            <header className={"layout__header"}>
                <div className={"layout__header--menu"}>
                    <button className={"components__button--language-ru"}
                            onClick={() => languageChange('ru')}>
                        Русский
                    </button>
                    <button className={"components__button--language-en"}
                            onClick={() => languageChange('en')}>
                        English
                    </button>
                    <button className={"components__button--reset"}
                            type={"button"}
                            onClick={onLogoutClicked}>
                        <Trans id={"layout__logout"}>Logout</Trans>
                    </button>
                </div>

            </header>
            <nav className={"layout__sidebar"}>
                <div className={"layout__sidebar--logo"}>
                    <img src={BooksmanLogo} alt={"Logo"} width={98} height={111}/>
                </div>
                <ul className={"layout__sidebar--menu"}>
                    <li>
                        <LinkRouter to={"/profile"}
                                    path={path}
                                    icon={"profile"}>
                            <Trans id={"layout__profile"}>Profile</Trans>
                        </LinkRouter>
                    </li>
                    <li>
                        <LinkRouter to={"/market"}
                                    path={path}
                                    icon={"market"}>
                            <Trans id={"layout__market"}>Market</Trans>
                        </LinkRouter>
                    </li>
                    <li>
                        <LinkRouter to={"/orders"}
                                    path={path}
                                    icon={"orders"}>
                            <Trans id={"layout__orders"}>Orders</Trans>
                        </LinkRouter>
                    </li>
                </ul>
            </nav>
            <div className={"layout__page"}>
                {children}
            </div>
        </div>
    )
};

const Layout = connect(mapStateToProps, mapDispatchToProps)(ConnectedLayout);

export default props => <Layout {...props}/>; // eslint-disable-line
