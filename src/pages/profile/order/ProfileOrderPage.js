import {connect} from "react-redux";
import React, {useEffect} from "react";
import {profileActions} from "../store/actions";
import {profileSelectors} from "../store/selectors";

const mapStateToProps = (root) => ({
    orderInfo: profileSelectors.orderInfo(root),
    orderComments: profileSelectors.orderComments(root),
});

const mapDispatchToProps = (dispatch) => ({
    getProfileOrder: (orderId) => dispatch(profileActions.getOrderData(orderId)),
});

const ConnectedProfileOrderPage = ({getProfileOrder, orderInfo, orderComments}) => {
    useEffect(() => {
        getProfileOrder(localStorage.getItem("booksmanProfileOrderId"));
    }, []); // eslint-disable-line

    return (
        <div className={"profile page__background"}>
            <section className={"components__card"}>
                <img src={orderInfo?.cover}
                     alt="Avatar"
                     width={160}
                     height={160}/>
                <div>
                    <p>Name: {orderInfo?.name}</p>
                    <p>Description: {orderInfo?.discription}</p>
                    <p>Pages: {orderInfo?.pages}</p>
                    <p>Pages: {orderInfo?.weight}</p>
                    <p>Pages: {orderInfo?.price}</p>
                </div>
            </section>
            <section className={"components__card"}>
                <ol>
                    {orderComments.map(el =>
                        <li key={el.id}>* {el.text.substr(0, 500) + "..."}</li>
                    )}
                </ol>
            </section>
        </div>
    )
};

export const ProfileOrderPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedProfileOrderPage);