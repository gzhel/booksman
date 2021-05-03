import React from "react";
import {connect} from "react-redux";
import Book from "../../assets/images/book-example.jpg";
import Avatar from "../../assets/images/avatar.png";

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const ConnectedProfilePage = () => {

    const userInfo = {
        firstName: 'Oleg',
        lastName: 'Stonks',
        age: 19,
        units: 11204,
    };

    return (
        <div className={"profile page__background"}>
            <section className={"components__card profile__user"}>
                <img src={Avatar}
                     alt="Avatar"
                     width={160}
                     height={160}/>
                <div className={"profile__user--info"}>
                    <p>First name: {userInfo?.firstName}</p>
                    <p>Last name: {userInfo?.lastName}</p>
                    <p>Age: {userInfo?.age}</p>
                    <p>Units: {userInfo?.units} ₽</p>
                </div>
            </section>
            <section className={"components__card profile__orders"}>
                <h3 className={"profile__orders--title"}>
                    Your orders:
                </h3>
                <div className={"profile__orders--list"}>
                    <img src={Book}
                         alt="Avatar"
                         width={122}
                         height={194}/>
                    <img src={Book}
                         alt="Avatar"
                         width={122}
                         height={194}/>
                    <img src={Book}
                         alt="Avatar"
                         width={122}
                         height={194}/>
                    <img src={Book}
                         alt="Avatar"
                         width={122}
                         height={194}/>
                    <img src={Book}
                         alt="Avatar"
                         width={122}
                         height={194}/>
                    <img src={Book}
                         alt="Avatar"
                         width={122}
                         height={194}/>
                    <img src={Book}
                         alt="Avatar"
                         width={122}
                         height={194}/>
                    <img src={Book}
                         alt="Avatar"
                         width={122}
                         height={194}/>
                    <img src={Book}
                         alt="Avatar"
                         width={122}
                         height={194}/>
                    <img src={Book}
                         alt="Avatar"
                         width={122}
                         height={194}/>
                </div>
            </section>
        </div>
    );
};

export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(ConnectedProfilePage);
