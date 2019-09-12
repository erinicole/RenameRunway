import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import Modal from './modal/modal'
import StartContainer from './start/start_container';
import Splash from './splash/splash';
import SignInFormContainer from './session_form/sign_in_form_container';
import JoinNowFormContainer from './session_form/join_now_form_container';

const App = () => (
    <div>
        < Modal />
        <h1>Pockets</h1>
        <nav>
            <StartContainer />
        </nav>
        <Switch>
            <Route path='/' component={Splash} />
        </Switch>
    </div>
);

export default App;