import React, {Component, Fragment} from 'react';

import classes from './Modal.module.scss';
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={`${classes.Modal} ${this.props.show ? classes.ShowModal : classes.HideModal}`}
                >
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal;