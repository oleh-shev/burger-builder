import React from 'react';
import classes from './BulidControls.module.scss';
import BuildControl from "./BuildControl/BuildControl";
import PropTypes from 'prop-types';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>$ {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >
            ORDER NOW
        </button>
    </div>
);

BuildControls.propTypes = {
    price: PropTypes.number,
    ingredientAdded: PropTypes.func,
    ingredientRemoved: PropTypes.func,
    disabled: PropTypes.shape({
        salad: PropTypes.bool,
        bacon: PropTypes.bool,
        cheese: PropTypes.bool,
        meat: PropTypes.bool
    }),
    purchasable: PropTypes.bool,
    ordered: PropTypes.func
}

export default BuildControls;