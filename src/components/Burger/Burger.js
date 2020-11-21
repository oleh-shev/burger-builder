import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import PropTypes from 'prop-types';

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />;
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

Burger.propTypes = {
    ingredients: PropTypes.shape({
        salad: PropTypes.number,
        cheese: PropTypes.number,
        meat: PropTypes.number,
        bacon: PropTypes.number,
    }),

}

export default Burger;