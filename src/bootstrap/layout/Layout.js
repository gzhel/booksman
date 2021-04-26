import React from "react";
import BooksmanLogo from "../../assets/images/booksman_logo.png";
import {connect} from "react-redux";

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const ConnectedLayout = ({children}) => {
    return (
        <header className={"layout__header"}>
            <div className={"layout__header--logo"}>
                <img src={BooksmanLogo} alt={"Logo"} width={70} height={60}/>
            </div>
            <div className={"layout__header--menu"}>
                <div className={"layout__header--language"}>

                </div>
                <div className={"layout__header--logout"}>

                </div>
            </div>
            <nav className={"layout__sidebar"}>

            </nav>
        </header>
    )
};

const Layout = connect(mapStateToProps, mapDispatchToProps)(ConnectedLayout);

export default props => <Layout {...props}/>;
