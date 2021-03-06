import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import classes from './OrderSummary.module.scss'

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
      .map(igKey => {
          return <li key={igKey}>
              <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
          </li>
      })
    return (
      <Fragment>
          <h3>Your Order</h3>
          <p>A delicious burger with the following ingredients:</p>
          <ul>
              {ingredientSummary}
          </ul>
          <p><strong>Total Price: $ {props.price.toFixed(2)}</strong></p>
          <p>Continue to checkout?</p>
          <button
              className={classes.CancelButton}
              onClick={props.purchaseCanceled}
          >
              CANCEL
          </button>
          <button
              className={classes.ContinueButton}
              onClick={props.purchaseContinued}
          >
              CONTINUE
          </button>
      </Fragment>
  )
};

OrderSummary.propTypes = {
    ingredients: PropTypes.shape({
        salad: PropTypes.number,
        cheese: PropTypes.number,
        meat: PropTypes.number,
        bacon: PropTypes.number
    }),
    price: PropTypes.number,
    purchaseCanceled: PropTypes.func,
    purchaseContinued: PropTypes.func

}

export default OrderSummary;