import React from 'react';

import classes from './DrawerToggle.module.scss';
import PropTypes from 'prop-types';

const DrawerToggle = props => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div/>
        <div/>
        <div/>
    </div>
);

DrawerToggle.propTypes = {
    clicked: PropTypes.func
}

export default DrawerToggle;