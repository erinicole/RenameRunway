import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import Modal from './modal/modal'
import NavContainer from './nav/nav_container';
import Splash from './splash/splash';
import SignInFormContainer from './session_form/sign_in_form_container';
import JoinNowFormContainer from './session_form/join_now_form_container';
import NotFound from './session_form/not_found';
import ProductIndexContainer from './products/product_index_container'
import ProductShowContainer from './products/product_show_container'


const App = () => (
    <div>
        < Modal />
        <nav>
            <NavContainer />
        </nav>
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route path = '/products/:productId' component={ProductShowContainer} />
            <Route exact path='/products' component={ProductIndexContainer} />
            <Route path='/' component={NotFound} />
        </Switch>

    </div>
);

export default App;