import React from 'react';
import { Link } from 'react-router-dom';
import NavSignIn from './nav_sign_in'



const Nav = ({ currentUser, logout, openModal }) => {

    // window.onscroll = function () { myFunction() };

    // const header = document.getElementById("nav-barr");
    // const sticky = header.offsetTop;

    // function myFunction() {
    //     if (window.pageYOffset > sticky) {
    //         header.classList.add("sticky");
    //     } else {
    //         header.classList.remove("sticky");
    //     }
    // }


    const getSignIn = () => (
        <div >
            <button className='nav-sign-in' onClick={() => openModal('signin')}>SIGN IN</button>
        </div>
    );


    return (
        <div className='nav-bar' id='nav-bar'>
            <Link to='/'>
                <img className='nav-icon' src='../../assets/RCWP.png' alt='RCWB logo' />
            </Link>
            <div className='nav-container' >
                <div className='nav-part-1'>
                    <div className='cat-link'>CLOTHING</div>
                    <div className='cat-link'>ACCESSORIES</div>
                    <div className='cat-link'>DESIGNERS</div>
                    <div className='cat-link'>FALL ITEMS</div>
                    <div className='nav-search'> </div>
                </div>
                <div className='nav-part-2'>
                    <div className='nav-user-menu'>
                        {currentUser ? <NavSignIn /> : getSignIn()}
                        <img className='nav-heart-icon' src='../../assets/heart.png' alt='heart' />
                        {currentUser ? <img className='nav-shopping-bag' src='../../assets/shopping-bag.png' alt='shopping bag' /> : null}
                        <a href='https://www.linkedin.com/in/erinicole1988/' target='_blank' className='a-link'>
                            <div className='nav-linkedin'>
                                <p className='nav-linkedin-bold' > LIMITED TIME ONLY </p>
                                <p > ERIN HILL LINKEDIN</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Nav