import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout, openModal }) => {
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
        <div className='nav-bar' id='nav-bar'>
            <div className='nav-icon'></div>
            <div className='nav-links-container'>
                <div className='nav-cat-links' >
                    <div>CLOTHING</div>
                    <div>ACCESSORIES</div>
                    <div>DESIGNERS</div>
                    <div>FALL ITEMS</div>
                </div>
                <div className='nav-search'> </div>
                <div className='nav-user-menu'> 
                    {currentUser ? alreadySignedIn() : getSignIn()}
                    <div className='nav-linkedin'> LINK TO LINKEDIN </div>
                </div>
            </div>

        </div >

    )
}

export default Nav