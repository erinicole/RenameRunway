import React from "react";
import { Link } from 'react-router-dom';

class NotFound extends React.Component {


    render() {
        return (
            <div className='not-found-div'>
                <img className='not-found-image' src='../../assets/RCWP.png' />
                <h1 className='not-found-h1'>There's a hole in your pocket!</h1>
                <p className='not-found-p'>Sorry, this page is unavailable</p>
                <Link className='not-found-link' to='/'>RETURN TO ENDLESS POCKETS</Link>
            </div>
        )
    }
}

export default NotFound