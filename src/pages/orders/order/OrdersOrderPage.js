import {connect} from "react-redux";
import React, {useEffect} from "react";
import {ordersSelectors} from "../store/selectors";
import {ordersActions} from "../store/actions";
import moment from "moment";
import {Trans} from "@lingui/macro";

const mapStateToProps = (root) => ({
    orderInfo: ordersSelectors.orderInfo(root),
});

const mapDispatchToProps = (dispatch) => ({
    getOrderData: (bookId) => dispatch(ordersActions.getOrderData(bookId)),
});

const ConnectedOrderDetailPage = ({orderInfo, getOrderData}) => {

    useEffect(() => {
        getOrderData(localStorage.getItem("booksmanOrdersBookId"));
    }, []); // eslint-disable-line

    console.log("orderInfo", orderInfo);

    return (
        <div className={"orders page__background"}>
            <section className={"components__card orders__item"}>
                <img src={orderInfo?.cover}
                     alt="Book"
                     width={244}
                     height={398}/>
                <div className={"orders__item--info"}>
                    <div>
                        <p><strong><Trans id={"market__name"}>Name:</Trans> </strong>{orderInfo?.name}</p>
                        <p><strong><Trans id={"market__weight"}>Weight:</Trans> </strong>{orderInfo?.weight}</p>
                        <p><strong><Trans id={"market__pages"}>Pages:</Trans> </strong>{orderInfo?.pages}</p>
                        <p><strong><Trans id={"market__status"}>Status:</Trans> </strong>{orderInfo?.status}</p>
                        <p><strong><Trans id={"market__postomat"}>Postomat:</Trans> </strong>{orderInfo?.postomat}</p>
                        <p><strong><Trans id={"market__dep-date"}>Departure date:</Trans> </strong>{moment(orderInfo?.departuredate).format("L")}</p>
                        <p><strong><Trans id={"market__arr-date"}>Arrival date:</Trans> </strong>{moment(orderInfo?.arrivaldate).format("L")}</p>
                    </div>
                </div>
            </section>
        </div>
    )
};

export const OrderDetailPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedOrderDetailPage);
