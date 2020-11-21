import React, {Fragment} from 'react';

import classes from './Modal.module.scss';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
    <Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={`${classes.Modal} ${props.show ? classes.ShowModal : classes.HideModal}`}
        >
            {props.children}
        </div>
    </Fragment>
);

export default Modal;