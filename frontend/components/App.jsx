import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import Modal from './modal/modal'
import NavContainer from './start/nav_container';
import Splash from './splash/splash';
import SignInFormContainer from './session_form/sign_in_form_container';
import JoinNowFormContainer from './session_form/join_now_form_container';
import NotFound from "./session_form/not_found";

const App = () => (
    <div>
        < Modal />
        <nav>
            <NavContainer />
        </nav>
        <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/' component={NotFound} />
        </Switch>

    </div>
);

export default App;