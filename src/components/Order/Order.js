import React from 'react';
import PropTypes from 'prop-types';

import classes from './Order.module.scss'

const Order = props => {
    const ingredients = [];

    for (let ingrName in props.ingredients) {
        ingredients.push(
            {
                name: ingrName,
                amount: props.ingredients[ingrName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span key={ig.name}>{ig.name} ({ig.amount}) </span>
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
};

Order.propTypes = {
    ingredients: PropTypes.shape({
        salad: PropTypes.number,
        cheese: PropTypes.number,
        meat: PropTypes.number,
        bacon: PropTypes.number,
    }),
    price: PropTypes.number
}

export default Order;
