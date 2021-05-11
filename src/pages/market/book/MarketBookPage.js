import {connect} from "react-redux";
import React from "react";
import {marketBooks, marketComments} from "../../../constants/marketBooks";

const mapStateToProps = (root) => ({
    // bookInfo: marketSelectors.bookInfo(root),
    // bookComments: marketSelectors.bookComments(root),
});

const mapDispatchToProps = (dispatch) => ({
    // getMarketBook: (bookId) => dispatch(marketActions.getMarketBook(bookId)),
});

const ConnectedMarketBookPage = () => {

    const bookInfo = marketBooks[0];

    return (
        <div className={"market page__background"}>
            <section className={"components__card market__book"}>
                <img src={bookInfo?.cover}
                     alt="Book"
                     width={244}
                     height={398}/>
                <div className={"market__book--info"}>
                    <div>
                        <p><strong>Name: </strong>{bookInfo?.name}</p>
                        <p><strong>Price: </strong>{bookInfo?.price} ₽</p>
                        <p><strong>Description: </strong>{bookInfo?.description}</p>
                    </div>
                    <button className={"components__button--default"}>Buy</button>
                </div>
            </section>
            <section className={"components__card mb-md"}>
                <ul className={"profile__order--comments"}>
                    {marketComments.map(el =>
                        <li key={el.id}>{el.text.substr(0, 400) + "..."}</li>
                    )}
                </ul>
            </section>
        </div>
    )
};

export const MarketBookPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedMarketBookPage);
