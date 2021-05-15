import {connect} from "react-redux";
import React, {useState} from "react";
import Select from "react-select";
import {marketActions} from "../../store/actions";
import {Modal} from "../../../../utils/modal/Modal";
import {marketSelectors} from "../../store/selectors";
import {profileSelectors} from "../../../profile/store/selectors";

const mapStateToProps = (root) => ({
    bookInfo: marketSelectors.bookInfo(root),
    userInfo: profileSelectors.userInfo(root),
});

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(marketActions.onHideBuyModal()),
    onBuyButtonClicked: (buyData) => dispatch(marketActions.onBuyButtonClicked(buyData)),
});

const ConnectedBuyModal = ({onClose, bookInfo, userInfo, onBuyButtonClicked}) => {

    const [postId, setPostId] = useState(-1);
    const handleChange = (postId) => setPostId(postId);
    const options = [{id: 1, label: 'Постомат 1'}, {id: 2, label: 'Постомат 2'}, {id: 3, label: 'Постомат 3'}, {id: 4, label: 'Постомат 4'},];

    return (
        <Modal onCancel={onClose}>
            <div className={"market__buy-modal mt-xl"}>
                <img src={bookInfo?.cover}
                     alt="Book"
                     width={122}
                     height={194}/>
                <div className={"market__buy-modal--info"}>
                    <p><strong>Name: </strong>{bookInfo?.name}</p>
                    <p><strong>Price: </strong>{bookInfo?.price} ₽</p>
                    <p><strong>Your cash: </strong>{userInfo?.cash} ₽</p>
                    <div>
                        <strong>Postomat: </strong>
                        <Select value={postId}
                                onChange={handleChange}
                                options={options}/>
                    </div>
                </div>
            </div>
            <div className={"market__buy-modal--button"}>
                <button className={"components__button--default"}
                        onClick={() => onBuyButtonClicked({bookId: bookInfo?.id, postId: postId?.id})}
                        disabled={(bookInfo?.price > userInfo?.cash)}>
                    Buy now
                </button>
            </div>
        </Modal>
    )
};

export const BuyModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedBuyModal);