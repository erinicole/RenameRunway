import React from 'react';
import { Link } from 'react-router-dom';

const Start = ({ currentUser, logout, openModal }) => {
    
    <div className='nav-bar-link'>CLOTHING</div>
    const getSignIn = () => (
        <nav className='getSignIn'>
            <button onClick={() => openModal('signin')}>SIGN IN</button>
        </nav>
    );

    const alreadySignedIn = () => (
        <nav className='alreadySignedIn'>
            <button className="user-info-dropdown" onClick={logout}>Log Out</button>
        </nav>
    );
    
    return( 
        <div className='nav-bar'>
            <div className='nav-bar-link'>CLOTHING</div>
            {currentUser ? alreadySignedIn() : getSignIn()}
        </div >

    )
}

export default Start