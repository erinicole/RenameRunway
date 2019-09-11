import React from 'react';
import { Link } from 'react-router-dom';

const Start = ({ currentUser, logout }) => {
    const getSignIn = () => (
        <nav className='getSignIn'>
            <Link to='/signin'>SIGN IN</Link>
        </nav>
    );

    const alreadySignedIn = () => (
        <nav className='alreadySignedIn'>
            <button className="user-info-dropdown" onClick={logout}>Log Out</button>
        </nav>
    );
    
    return currentUser ? alreadySignedIn() : getSignIn();
}

export default Start