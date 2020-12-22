import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.scss';

const BurgerIngredient = props => {
    let ingredient = null;

    if (props.type === 'bread-top') {
        ingredient = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}/>
                <div className={classes.Seeds2}/>
            </div>
        )
    } else {
        const className = props.type.split('-')
            .map(el => el.charAt(0).toUpperCase() + el.slice(1))
            .join('');
        ingredient = <div className={classes[className]}/>;
    }
    return ingredient;
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;