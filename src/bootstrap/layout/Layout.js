import React from "react";
import BooksmanLogo from "../../assets/images/booksman_logo.png";
import {connect} from "react-redux";
import {LinkRouter} from "../../components/link-router";

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const ConnectedLayout = ({children, path}) => {
    console.log('path', path);

    return (
        <div className={"layout"}>
            <header className={"layout__header"}>
                <div className={"layout__header--menu"}>
                    <button className={"components__button--language-ru"}
                            onClick={() => console.log("Switch to Russian")}>
                        Русский
                    </button>
                    <button className={"components__button--language-en"}
                            onClick={() => console.log("Switch to English")}>
                        English
                    </button>
                    <button className={"components__button--reset"}
                            type={"button"}
                            onClick={() => console.log('logout')}>
                        Logout
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
                            Profile
                        </LinkRouter>
                    </li>
                    <li>
                        <LinkRouter to={"/market"}
                                    path={path}
                                    icon={"market"}>
                            Market
                        </LinkRouter>
                    </li>
                    <li>
                        <LinkRouter to={"/orders"}
                                    path={path}
                                    icon={"orders"}>
                            Orders
                        </LinkRouter>
                    </li>
                    <li>
                        <LinkRouter to={"/chat"}
                                    path={path}
                                    icon={"chat"}>
                            Chat
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
