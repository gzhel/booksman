import {connect} from "react-redux";
import React, {useState} from "react";
import {configSelectors} from "../../utils/config/store/selectors";
import {marketBooks} from "../../constants/marketBooks";
import {Link} from "react-router-dom";

const mapStateToProps = (root) => ({
    isShowPreloader: configSelectors.isShowPreloader(root),
});

const mapDispatchToProps = (dispatch) => ({
    // getMarketData: () => dispatch(marketActions.getMarketData()),
});

const ConnectedMarketPage = ({
    isShowPreloader,
}) => {
    const [pagesIndex, setPagesIndex] = useState(10);

    return (
        <div className={"market page__background"} style={isShowPreloader ? {filter: "blur(5px)"} : {filter: "none"}}>
            <section className={"components__card market__items"}>
                {marketBooks.map((book, index) =>
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
