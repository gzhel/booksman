import React, {useEffect} from "react";
import {connect} from "react-redux";
import Avatar from "../../assets/images/avatar.png";
import {profileActions} from "./store/actions";
import {profileSelectors} from "./store/selectors";
import {configSelectors} from "../../utils/config/store/selectors";
import {Link} from "react-router-dom";
import {AddCashModal} from "./add-cash-modal/AddCashModal";

const mapStateToProps = (root) => ({
    isShowPreloader: configSelectors.isShowPreloader(root),
    userInfo: profileSelectors.userInfo(root),
    userOrders: profileSelectors.userOrders(root),
    showAddCashModal: profileSelectors.showAddCashModal(root),
});

const mapDispatchToProps = (dispatch) => ({
    getProfileData: () => dispatch(profileActions.getProfileData()),
    onShowAddCashModal: () => dispatch(profileActions.onShowAddCashModal()),
});

const ConnectedProfilePage = ({
    getProfileData,
    userInfo,
    userOrders,
    isShowPreloader,
    onShowAddCashModal,
    showAddCashModal
}) => {

    useEffect(() => {
        getProfileData();
    }, [showAddCashModal]); // eslint-disable-line

    return (
        <div className={"profile page__background"} style={isShowPreloader ? {filter: "blur(5px)"} : {filter: "none"}}>
            <section className={"components__card profile__user"}>
                <img src={Avatar}
                     alt="Avatar"
                     width={160}
                     height={160}/>
                <div className={"profile__user--info"}>
                    <p>First name: {userInfo?.firstname}</p>
                    <p>Last name: {userInfo?.secondname}</p>
                    <p>Age: {userInfo?.age}</p>
                    <p>
                        Cash: {userInfo?.cash} ₽
                        <button className={"components__button--default"}
                                style={{marginLeft: 20}}
                                onClick={onShowAddCashModal}>
                            Add cash
                        </button>
                    </p>
                </div>
            </section>
            <section className={"components__card profile__orders"}>
                <h3 className={"profile__orders--title"}>
                    Your orders:
                </h3>
                <div className={"profile__orders--list"}>
                    {userOrders.map((order) =>
                        <Link to={`/profile/orders/${order?.id}`}
                              onClick={() => localStorage.setItem("booksmanProfileOrderId", order?.id)}
                              className={"profile__orders--item"}
                              key={order?.id}>
                            <img src={order?.cover}
                                 alt="Avatar"
                                 width={122}
                                 height={194}
                                 onClick={() => "onShowModal(order?.id)"}/>
                            <p>{order?.name.substr(0, 30) + "..."}</p>
                        </Link>
                    )}
                </div>
            </section>
            {showAddCashModal && <AddCashModal/>}
        </div>
    );
};

export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(ConnectedProfilePage);
