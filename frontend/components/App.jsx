import React from "react";
import {Route} from 'react-router-dom'
import StartContainer from './start/start_container';
import SignInFormContainer from './session_form/sign_in_form_container';
import JoinNowFormContainer from './session_form/join_now_form_container';

const App = () => (
    <div>
        <h1>Pockets</h1>
        <nav>
            <StartContainer />
        </nav>
        <Route path='/signin' component={SignInFormContainer} />
        <Route path='/joinnow' component={JoinNowFormContainer} />
    </div>
);

export default App;