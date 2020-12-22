import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import Input from "../../components/UI/Input/Input";
import classes from "./Auth.module.scss";
import * as actions from "../../store/actions/index"
import Spinner from "../../components/UI/Spinner/Spinner";
import {updateObject, checkValidity} from "../../shared/utility";

const Auth = props => {
    const {
        loading,
        error,
        isAuthenticated,
        buildingBurger,
        authRedirectPath,
        onAuth,
        onSetAuthRedirectPath
    } = props;

    const [authForm, setAuthForm] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Mail Address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    });
    const [isSignup, setIsSignup] = useState(true);

    useEffect(() => {
        if (!buildingBurger && authRedirectPath !== '/') {
            onSetAuthRedirectPath();
        }
    }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath])

    const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(authForm, {
            [controlName]: updateObject(authForm[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, authForm[controlName].validation),
                touched: true
            })
        });
        setAuthForm(updatedControls);
    };

    const submitHandler = event => {
        event.preventDefault();
        onAuth(authForm.email.value, authForm.password.value, isSignup);
    }

    const switchAuthModelHandler = () => {
        setIsSignup(!isSignup);
    };

    const formElementsArray = [];
    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key]
        });
    }

    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => inputChangedHandler(event, formElement.id)}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
        />
    ));

    if (loading) {
        form = <Spinner/>;
    }

    const errorMessage = error ?
        <p>{error.message.split('_').join(' ')}</p> :
        null;

    let authRedirect = isAuthenticated ? <Redirect to={authRedirectPath}/> : null;

    return (
        <div className={classes.Auth}>
            {authRedirect}
            {errorMessage}
            <form onSubmit={submitHandler}>
                {form}
                <button className={classes.SubmitButton}>SUBMIT</button>
            </form>
            <button
                className={classes.SwitchButton}
                onClick={switchAuthModelHandler}
            >
                SWITCH TO {isSignup ? 'SIGN IN' : 'SIGN UP'}
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);