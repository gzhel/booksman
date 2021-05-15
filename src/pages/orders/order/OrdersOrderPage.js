import {connect} from "react-redux";
import React, {useEffect} from "react";
import {ordersSelectors} from "../store/selectors";
import {ordersActions} from "../store/actions";
import moment from "moment";

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
                        <p><strong>Name: </strong>{orderInfo?.name}</p>
                        <p><strong>Weight: </strong>{orderInfo?.weight}</p>
                        <p><strong>Pages: </strong>{orderInfo?.pages}</p>
                        <p><strong>Status: </strong>{orderInfo?.status}</p>
                        <p><strong>Postomat: </strong>{orderInfo?.postomat}</p>
                        <p><strong>Departure date: </strong>{moment(orderInfo?.departuredate).format("L")}</p>
                        <p><strong>Arrival date: </strong>{moment(orderInfo?.arrivaldate).format("L")}</p>
                    </div>
                </div>
            </section>
        </div>
    )
};

export const OrderDetailPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedOrderDetailPage);