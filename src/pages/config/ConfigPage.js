import {useEffect} from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {configSelectors} from "../../utils/config/store/selectors";
import {configActions} from "../../utils/config/store/actions";

const mapStateToProps = (root) => ({
    isAuthorized: configSelectors.isAuthorized(root),
});

const mapDispatchToProps = (dispatch) => ({
    checkAuth: () => dispatch(configActions.checkAuth()),
});

const ConnectedConfigPage = ({
    isAuthorized,
    checkAuth,
}) => {

    useEffect(() => {
        checkAuth();
        // setupEni18n();
    }, []); // eslint-disable-line

    return isAuthorized ? <Redirect to={"/profile"}/> : <Redirect to={"/auth"}/>;
};

export const ConfigPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedConfigPage);
