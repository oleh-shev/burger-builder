import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.scss';
import PropTypes from 'prop-types';

const NavigationItem = props => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

NavigationItem.propTypes = {
    link: PropTypes.string,
    active: PropTypes.bool
}

export default NavigationItem;