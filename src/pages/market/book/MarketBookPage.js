import {connect} from "react-redux";
import React, {useEffect} from "react";
import {marketActions} from "../store/actions";
import {marketSelectors} from "../store/selectors";
import {BuyModal} from "./modals/BuyModal";
import {BuySuccessModal} from "./modals/BuySuccessModal";
import {BuyFailedModal} from "./modals/BuyFailedModal";
import {Trans} from "@lingui/macro";

const mapStateToProps = (root) => ({
    bookInfo: marketSelectors.bookInfo(root),
    bookComments: marketSelectors.bookComments(root),
    showBuyModal: marketSelectors.showBuyModal(root),
    showBuySuccessModal: marketSelectors.showBuySuccessModal(root),
    showBuyFailedModal: marketSelectors.showBuyFailedModal(root),
});

const mapDispatchToProps = (dispatch) => ({
    getMarketBook: (bookId) => dispatch(marketActions.getBookData(bookId)),
    onShowBuyModal: () => dispatch(marketActions.onShowBuyModal()),
});

const ConnectedMarketBookPage = ({
    getMarketBook,
    bookInfo,
    bookComments,
    showBuyModal,
    showBuySuccessModal,
    showBuyFailedModal,
    onShowBuyModal,
}) => {

    useEffect(() => {
        getMarketBook(localStorage.getItem("booksmanMarketBookId"));
    }, []); // eslint-disable-line

    return (
        <div className={"market page__background"}>
            <section className={"components__card market__book"}>
                <img src={bookInfo?.cover}
                     alt="Book"
                     width={244}
                     height={398}/>
                <div className={"market__book--info"}>
                    <div>
                        <p><strong><Trans id={"market__name"}>Name:</Trans> </strong>{bookInfo?.name}</p>
                        <p><strong><Trans id={"market__weight"}>Weight:</Trans> </strong>{bookInfo?.weight}</p>
                        <p><strong><Trans id={"market__pages"}>Pages:</Trans> </strong>{bookInfo?.pages}</p>
                        <p><strong><Trans id={"market__price"}>Price:</Trans> </strong>{bookInfo?.price} ₽</p>
                        <p><strong><Trans id={"market__description"}>Description:</Trans> </strong>{bookInfo?.discription}</p>
                    </div>
                    <button className={"components__button--default"}
                            onClick={onShowBuyModal}>
                        <Trans id={"market__buy"}>Buy</Trans>
                    </button>
                </div>
            </section>
            <section className={"components__card mb-md"}>
                <ul className={"profile__order--comments"}>
                    {bookComments.map(el =>
                        <li key={el.id}>{el.text.substr(0, 400) + "..."}</li>
                    )}
                </ul>
            </section>
            {showBuyModal && <BuyModal/>}
            {showBuySuccessModal && <BuySuccessModal/>}
            {showBuyFailedModal && <BuyFailedModal/>}
        </div>
    )
};

export const MarketBookPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedMarketBookPage);
