import React from 'react';

import classes from './Toolbar.module.scss';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import PropTypes from 'prop-types';

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

Toolbar.propTypes = {
    drawerToggleClicked: PropTypes.func
}

export default Toolbar;