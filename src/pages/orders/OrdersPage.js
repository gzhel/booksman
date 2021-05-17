import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import {configSelectors} from "../../utils/config/store/selectors";
import {ordersActions} from "./store/actions";
import {ordersSelectors} from "./store/selectors";
import {Link} from "react-router-dom";
import {Trans} from "@lingui/macro";

const mapStateToProps = (root) => ({
    isShowPreloader: configSelectors.isShowPreloader(root),
    ordersList: ordersSelectors.ordersList(root),
});

const mapDispatchToProps = (dispatch) => ({
    getOrdersData: () => dispatch(ordersActions.getOrdersData()),
});

const ConnectedOrdersPage = ({isShowPreloader, ordersList, getOrdersData}) => {
    const [pagesIndex, setPagesIndex] = useState(10);

    useEffect(() => {
        getOrdersData();
    }, []); // eslint-disable-line

    return (
        <div className={"orders page__background"} style={isShowPreloader ? {filter: "blur(5px)"} : {filter: "none"}}>
            <section className={"components__card orders__items"}>
                {ordersList?.map((order, index) =>
                    (index < pagesIndex) &&
                    <div className={"orders__items--item"} key={order?.id}>
                        <img src={order?.cover}
                             alt="Avatar"
                             width={122}
                             height={194}/>
                        <p className={"orders__items--item-name"}>{order?.name}</p>
                        <Link to={`/orders/order/${order?.id}`}
                              onClick={() => localStorage.setItem("booksmanOrdersBookId", order?.id)}>
                            <button className={"components__button--minimized"}>
                                <Trans id={"market__detail-info"}>Detail info</Trans>
                            </button>
                        </Link>
                    </div>
                )}
            </section>
            <button className={"market__button components__button--default"}
                    onClick={() => setPagesIndex(pagesIndex + 10)}>
                <Trans id={"market__load-more"}>Load more</Trans>
            </button>
        </div>
    )
};

export const OrdersPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedOrdersPage);
