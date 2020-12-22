import React, {Fragment} from 'react';

import classes from './Modal.module.scss';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {

    return (
        <Fragment>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div
                className={`${classes.Modal} ${props.show ? classes.ShowModal : classes.HideModal}`}
            >
                {props.children}
            </div>
        </Fragment>
    )
}

export default React.memo(Modal, ((prevProps, nextProps) => {
    return nextProps.show === prevProps.show &&
        nextProps.children === prevProps.children;
}));