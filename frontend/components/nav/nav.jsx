import React from 'react';
import { Link } from 'react-router-dom';
import './nav_logout_dropdown';
import NavSignIn from './nav_sign_in'

const Nav = ({ currentUser, logout, openModal }) => {
    const getSignIn = () => (
        <nav className='getSignIn'>
            <button onClick={() => openModal('signin')}>SIGN IN</button>
        </nav>
    );

    const alreadySignedIn = () => (
        
        <NavSignIn />
    );
    
    return( 
        <div className='nav-bar' id='nav-bar'>
            <img className='nav-icon' src='../../assets/RCWP.png' alt='RCWB logo' />
            <div className='nav-container'>
                <div className='nav-cat-links' >
                    <div className='cat-link'>CLOTHING</div>
                    <div className='cat-link'>ACCESSORIES</div>
                    <div className='cat-link'>DESIGNERS</div>
                    <div className='cat-link'>FALL ITEMS</div>
                </div>
                <div className='nav-search'> </div>
                <div className='nav-user-menu'> 
                    {currentUser ? <NavSignIn /> : getSignIn()}
                    <img className='nav-heart-icon' src='../../assets/heart.png' alt='heart' />
                    {currentUser ? <img className='nav-shopping-bag' src='../../assets/shopping-bag.png'  alt='shopping bag'/> : null }
                    <div className='nav-linkedin'> LINK TO LINKEDIN </div>
                </div>
            </div>

        </div >

    )
}

export default Nav