import React from "react";
import {connect} from "react-redux";
import Book from "../../assets/images/book-example.jpg";
import Avatar from "../../assets/images/avatar.png";

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const ConnectedProfilePage = () => {

    const mockUserInfo = {
        firstName: 'Oleg',
        lastName: 'Stonks',
        age: 19,
        units: 11204,
    };

    const mockOrders = [
        {
            id: 1,
            bookName: "451F",
            description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
            id: 2,
            bookName: "451Ff",
            description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
            id: 3,
            bookName: "451Fff",
            description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
            id: 4,
            bookName: "451Ffff",
            description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
            id: 5,
            bookName: "451Fffff",
            description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
            id: 6,
            bookName: "451Ffffff",
            description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
            id: 7,
            bookName: "451F1241241",
            description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        },
    ];

    return (
        <div className={"profile page__background"}>
            <section className={"components__card profile__user"}>
                <img src={Avatar}
                     alt="Avatar"
                     width={160}
                     height={160}/>
                <div className={"profile__user--info"}>
                    <p>First name: {mockUserInfo?.firstName}</p>
                    <p>Last name: {mockUserInfo?.lastName}</p>
                    <p>Age: {mockUserInfo?.age}</p>
                    <p>Units: {mockUserInfo?.units} ₽</p>
                </div>
            </section>
            <section className={"components__card profile__orders"}>
                <h3 className={"profile__orders--title"}>
                    Your orders:
                </h3>
                <div className={"profile__orders--list"}>
                    {mockOrders.map((order) =>
                        <img src={Book}
                             alt="Avatar"
                             width={122}
                             height={194}
                             onClick={() => console.log("onShowModal(ModalName, order?.id)", order)}
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(ConnectedProfilePage);
