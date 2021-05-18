import {connect} from "react-redux";
import React, {useEffect} from "react";
import {profileActions} from "../store/actions";
import {profileSelectors} from "../store/selectors";
import {Trans} from "@lingui/macro";

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
            <section className={"components__card profile__order"}>
                <img src={orderInfo?.cover}
                     alt="Book"
                     width={244}
                     height={398}/>
                <div className={"profile__order--info"}>
                    <p><strong><Trans id={"market__name"}>Name:</Trans> </strong>{orderInfo?.name}</p>
                    <p><strong><Trans id={"market__pages"}>Pages:</Trans> </strong>{orderInfo?.pages}</p>
                    <p><strong><Trans id={"market__weight"}>Weight:</Trans> </strong>{orderInfo?.weight}</p>
                    <p><strong><Trans id={"market__price"}>Price:</Trans> </strong>{orderInfo?.price} ₽</p>
                    <p><strong><Trans id={"market__description"}>Description:</Trans> </strong>{orderInfo?.discription}</p>
                </div>
            </section>
            <section className={"components__card mb-md"}>
                <ul className={"profile__order--comments"}>
                    {orderComments.map(el =>
                        <li key={el.id}>{el.text.substr(0, 400) + "..."}</li>
                    )}
                </ul>
            </section>
        </div>
    )
};

export const ProfileOrderPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedProfileOrderPage);
