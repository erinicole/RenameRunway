import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/session_actions'

const NavSignedIn = () => {
    const dispatch = useDispatch()

    const [hidden, setHidden] = useState(true)

    const onHover = (e) => {
        setHidden(false)
    }

    const offHover = (e) => {
        setHidden(true)
    }

    const logoutHandler = () => {
        dispatch(logout())
    }


    return (
        <div className='nav-logout'
            onMouseOver={onHover}
            onMouseOut={offHover}
        >
            <img id="person-dropdown-btn"
                className='nav-person-icon'
                src='../../assets/profile.png'
                alt='person icon'
            />

            <nav id="nav-logout-dropdown" className={"nav-logout-dropdown " + (hidden ? 'hidden' : '')}>
                <ul >
                    <li> MY ACCOUNT </li>
                    <li> <button className="user-info-dropdown" onClick={logoutHandler}>Log Out</button></li>
                </ul>
            </nav>
        </div>
    )
};

export default NavSignedIn;