import React from 'react';
import $ from 'jQuery';

const NavSignedIn = () => {


    const onhover = (e) => {
        $('#nav-logout-dropdown').removeClass('hidden');
    }

    const offhover = (e) => {
        $('#nav-logout-dropdown').addClass('hidden');
    }


    return (
        <div className='nav-logout'>
            <img id="person-dropdown-btn"
                className='nav-person-icon'
                src='../../assets/profile.png'
                alt='person icon'
                onMouseOver={onhover}
                onMouseOut={offhover} />
            <nav className='alreadySignedIn'>
                <ul id="nav-logout-dropdown" className="nav-logout-dropdown hidden">
                    <li> MY ACCOUNT </li>
                    <li> <button className="user-info-dropdown" onClick={logout}>Log Out</button></li>
                </ul>
            </nav>
        </div>
    )
};

export default NavSignedIn;