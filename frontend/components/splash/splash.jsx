import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className='splash-all'>
            <div className='splash-hero'>
                <h1 className='splash-hero-h1'>
                    <span > 
                        The Search for Pockets
                        <br>
                        </br>
                        Is Finally Over
                    </span>
                </h1>
                <h3 className='splash-hero-h3'>
                    <span >
                        Work, the gym, the weekend—you name it!
                        <br/>
                        One membership gives you limitless pockets.
                        <br />
                        Get started and never go pocketless again.
                    </span>
                </h3>
            </div>
            <div className='splash-add-space'>

            </div>
            <div className='splash-row-category' >
                <div className='splash-cat1' ></div>
                <div className='splash-cat2' ></div>
            </div>
        </div >

    )
}

export default Splash