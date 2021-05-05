import classNames from "classnames";
import {Link} from "react-router-dom";
import React from "react";

export const LinkRouter = ({to, icon, path, children}) => {
    const linkClass = classNames({
        'components__icon--active' : (path === to),
    });
    return (
        <Link to={to} className={linkClass}>
            {icon && <i className={`components__icon--${icon}`}/>}
            <span className={"components__icon--text"}>{children}</span>
        </Link>
    )
};
