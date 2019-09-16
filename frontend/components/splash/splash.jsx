import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className='splash-all'>
            <div className='splash-hero'>
                <h1 className='splash-hero-h1'>
                    <span >
                        Our Motto is Pockets
                        <br/>
                        or it Didn't Happen
                    </span>
                </h1>
                <h3 className='splash-hero-h3'>
                    <span >
                        Work, the gym, the weekend—you name it!
                        <br />
                        One membership gives you limitless pockets.
                        <br />
                        Get started and never go pocketless again.
                    </span>
                </h3>
            </div>

            <div className='splash-category-pics' >
                <img className='splash-cat1-pic' src='../../assets/coat.png' alt='coat with pockets' />
                <img className='splash-cat2-pic' src='../../assets/dress-two.jpg' alt='dress with pockets' />
            </div>
            <div className='splash-category-description' >
                <div className='splash-cat1-descrip'>
                    <p className='splash-h1'> Winter Is Coming</p>
                    <p className='splash-h2'> Coats Worthy of Daenerys </p>
                </div>
                <div className='splash-cat2-descrip'>
                    <p className='splash-h1'> Office Top Trends</p>
                    <p className='splash-h2'> Keep Your Hands Warm </p>
                </div>
            </div>
        </div>


    )
}

export default Splash