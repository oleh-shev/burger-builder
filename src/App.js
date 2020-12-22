import React, {useEffect, Suspense} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index"
import Spinner from "./components/UI/Spinner/Spinner";

const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));
const Orders = React.lazy(() => import('./containers/Orders/Orders'));
const Auth = React.lazy(() => import('./containers/Auth/Auth'));

const App = props => {

    const {isAuthenticated, onCheckAuthState} = props;

    useEffect(() => {
        onCheckAuthState();
    }, [onCheckAuthState]);


    let routes = (
        <Switch>
            <Route path="/auth" render={() => <Auth/>}/>
            <Route path="/" exact component={BurgerBuilder}/>
            <Redirect to="/"/>
        </Switch>
    );

    if (isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/checkout" render={() => <Checkout/>}/>
                <Route path="/orders" render={() => <Orders/>}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/auth" render={() => <Auth/>}/>
                <Route path="/" exact component={BurgerBuilder}/>
                <Redirect to="/"/>
            </Switch>
        );
    }

    return (
        <div>
            <Layout>
                <Suspense fallback={<Spinner/>}>
                    {routes}
                </Suspense>
            </Layout>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCheckAuthState: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
