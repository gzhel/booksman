import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import {configSelectors} from "../../utils/config/store/selectors";
import {Link} from "react-router-dom";
import {marketSelectors} from "./store/selectors";
import {marketActions} from "./store/actions";

const mapStateToProps = (root) => ({
    isShowPreloader: configSelectors.isShowPreloader(root),
    booksList: marketSelectors.booksList(root),
});

const mapDispatchToProps = (dispatch) => ({
    getMarketData: () => dispatch(marketActions.getMarketData()),
});

const ConnectedMarketPage = ({
    isShowPreloader,
    getMarketData,
    booksList,
}) => {
    const [pagesIndex, setPagesIndex] = useState(10);

    useEffect(() => {
        getMarketData();
    }, []); // eslint-disable-line

    console.log('booksList', booksList);

    return (
        <div className={"market page__background"} style={isShowPreloader ? {filter: "blur(5px)"} : {filter: "none"}}>
            <section className={"components__card market__items"}>
                {booksList.map((book, index) =>
                    (index < pagesIndex) &&
                    <div className={"market__items--item"} key={book?.id}>
                        <img src={book?.cover}
                             alt="Avatar"
                             width={122}
                             height={194}/>
                        <p>{book?.name}</p>
                        <p>{book?.price} ₽</p>
                        <Link to={`/market/book/${book?.id}`}>
                            <button className={"components__button--minimized"}>
                                Detail info
                            </button>
                        </Link>
                    </div>
                )}

            </section>
            <button className={"market__button components__button--default"}
                    onClick={() => setPagesIndex(pagesIndex + 10)}>
                Load more
            </button>
        </div>
    )
};

export const MarketPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedMarketPage);
