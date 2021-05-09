import React from 'react';

export const Modal = ({disabled, onCancel = null, children}) => {

    return (
        <div className={"modals"}>
            <div className={"modals__bg"}/>
            <div className={"modals__wrapper"} tabIndex="-1">
                <div className={"modals__container"}>
                    <div className={"modals__outer"}>
                        <div className={"modals__zoom"}>
                            {onCancel && (
                                <div className={"modals__close"}>
                                    <button className={"components__button--default"}
                                            disabled={disabled}
                                            onClick={onCancel}>
                                        X
                                    </button>
                                </div>
                            )}
                            <div className="modals__content">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
