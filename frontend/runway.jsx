import React from 'react';
import ReactDOM from  'react-dom';
import configureStore from './store/store'
import { signin, logout} from './actions/session_actions'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    //testing
    window.signin = signin;
    window.logout = logout
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //testinng

    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store}/>, root)
})