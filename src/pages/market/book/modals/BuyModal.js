import {connect} from "react-redux";
import React, {useState} from "react";
import Select from "react-select";
import {marketActions} from "../../store/actions";
import {Modal} from "../../../../utils/modal/Modal";
import {marketSelectors} from "../../store/selectors";
import {profileSelectors} from "../../../profile/store/selectors";
import {Trans} from "@lingui/macro";

const mapStateToProps = (root) => ({
    bookInfo: marketSelectors.bookInfo(root),
    userInfo: profileSelectors.userInfo(root),
});

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(marketActions.onHideBuyModal()),
    onBuyButtonClicked: (buyData) => dispatch(marketActions.onBuyButtonClicked(buyData)),
});

const ConnectedBuyModal = ({onClose, bookInfo, userInfo, onBuyButtonClicked}) => {

    const [postId, setPostId] = useState(0);
    const handleChange = (postId) => setPostId(postId);
    const options = [
        {id: 1, label: 'ТЦ Юбилейный, Платановый бульвар, 3, 1 этаж'},
        {id: 2, label: 'Гаврилова ул., д. 105'},
        {id: 3, label: '1-го Мая ул., д. 270'},
        {id: 4, label: 'ТЦ BOSS-HOUSE, Атарбекова ул., д. 1/1'},
    ];

    return (
        <Modal onCancel={onClose}>
            <div className={"market__buy-modal mt-xl"}>
                <img src={bookInfo?.cover}
                     alt="Book"
                     width={122}
                     height={194}/>
                <div className={"market__buy-modal--info"}>
                    <p><strong><Trans id={"market__name"}>Name:</Trans> </strong>{bookInfo?.name}</p>
                    <p><strong><Trans id={"market__price"}>Price:</Trans> </strong>{bookInfo?.price} ₽</p>
                    <p><strong><Trans id={"market__your-cash"}>Your cash:</Trans> </strong>{userInfo?.cash} ₽</p>
                    <div>
                        <strong><Trans id={"market__postomat"}>Postomat:</Trans> </strong>
                        <Select value={postId}
                                onChange={handleChange}
                                options={options}/>
                    </div>
                </div>
            </div>
            <div className={"market__buy-modal--button"}>
                <button className={"components__button--default"}
                        onClick={() => onBuyButtonClicked({bookId: bookInfo?.id, postId: postId?.id})}
                        disabled={(bookInfo?.price > userInfo?.cash) || !postId}>
                    <Trans id={"market__buy-now"}>Buy now</Trans>
                </button>
            </div>
        </Modal>
    )
};

export const BuyModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedBuyModal);
