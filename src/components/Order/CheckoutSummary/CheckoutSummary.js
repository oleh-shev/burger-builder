import React from 'react';

import Burger from "../../Burger/Burger";
import classes from './CheckoutSummary.module.scss';

const CheckoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <button className={classes.CancelButton} onClick={props.checkoutCanceled}>CANCEL</button>
            <button className={classes.ContinueButton} onClick={props.checkoutContinued}>CONTINUE</button>
        </div>
    )
}
export default CheckoutSummary;