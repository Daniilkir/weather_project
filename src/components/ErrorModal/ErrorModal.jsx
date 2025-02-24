import React from "react";
import style from "./ErrorModal.module.css"; 

function ErrorModal({ message, onClose }) {
    return (
        <span className={style.backdrop} onClick={onClose}>
            <div className={style.modal} onClick={(e) => e.stopPropagation()}>
                <h3>{message}</h3>
            </div>
        </span>
    );
}

export default ErrorModal;
