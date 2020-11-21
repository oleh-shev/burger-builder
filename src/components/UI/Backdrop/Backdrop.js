import React from 'react';

import classes from './Backdrop.module.scss';
import PropTypes from 'prop-types';

const Backdrop = props => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}/> : null
)

Backdrop.propTypes = {
    show: PropTypes.bool,
    clicked: PropTypes.func
}

export default Backdrop;