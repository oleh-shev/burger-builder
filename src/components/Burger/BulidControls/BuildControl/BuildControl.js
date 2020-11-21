import React from 'react';
import classes from './BuildControl.module.scss';
import PropTypes from 'prop-types';

const BuildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}
        >
            Less
        </button>
        <button
            className={classes.More}
            onClick={props.added}
        >
            More
        </button>
    </div>

);

BuildControl.propTypes = {
    label: PropTypes.string,
    removed: PropTypes.func,
    disabled: PropTypes.bool,
    added: PropTypes.func
}

export default BuildControl;