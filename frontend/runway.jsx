import React from 'react';
import ReactDOM from  'react-dom';
import {signup, login, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.fish = () => {console.log('hi');};
    const root = document.getElementById('root')
    ReactDOM.render(<h1>BYEEE</h1>, root)
})