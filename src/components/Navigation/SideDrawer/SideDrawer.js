import React, {Fragment} from 'react';

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from './SideDrawer.module.scss'
import Backdrop from "../../UI/Backdrop/Backdrop";
import PropTypes from "prop-types";

const SideDrawer = props => {
    const attachedClasses = [classes.SideDrawer, props.open ? classes.Open : classes.Close];

    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Fragment>
    );
}

SideDrawer.propTypes = {
    open: PropTypes.bool,
    closed: PropTypes.func
}

export default SideDrawer;