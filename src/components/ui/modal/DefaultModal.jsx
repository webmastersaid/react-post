import React from "react";
import classes from './DefaultModal.module.css'

export default function DefaultModal({ children, visible, setVisible }) {
    return (
        <div className={[classes.modal, visible ? classes.active : ''].join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}