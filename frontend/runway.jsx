import React from 'react';
import ReactDOM from  'react-dom';
import configureStore from './store/store'
import {signup, login, logout} from './util/session_api_util';
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.fish = () => {console.log('hi');};
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={store}/>, root)
})