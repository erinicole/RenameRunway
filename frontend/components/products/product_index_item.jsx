import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = props => {
    const state = props.product

    const [heart, setHeart] = useState(true)

    const changeHeart = (e) => {
        heart ? setHeart(false) : setHeart(true)
    }




    return (
        < div className='product-card'>
            <div className='product-clothing-item'>
                <div className='heart-container'>
                    <div className='heart-button' onClick={changeHeart}> 
                        <img className='product-like-heart' src={heart ? window.images.heart : window.images.black_heart }  />
                    </div>
                    <Link to={`/products/${props.product.id}`}>
                    <div className='primary-area'>
                        <div className='product-wrapper-4-images'>
                            <div >
                                <img className='product-cycle-image-0' src={window.images.testa} />
                            </div>
                            {/* <div > 
                                <img className='product-cycle-image-1' src={window.images.testb} />
                            </div>
                            <div> 
                                <img className='product-cycle-image-2' src={window.images.testc} />
                            </div>
                            <div> 
                                <img className='product-cycle-image-3' src={window.images.testd} />
                            </div> */}
                        </div>
                    </div>
                    </Link>
                </div>
  
            </div>
            <div className='product-card-details'>
                <h2 className='product-card-designer'>{state.designer_name} {state.id}</h2>
                <p className='product-card-title'>{state.title}</p>
                <div className='product-card-price'>
                    <span className='product-rent-price'>${state.rent_price}</span>
                    <span className='product-rent-line'> | </span>
                    <span className='product-retail-price'>${state.retail_price} retail</span>
                </div>
            </div>
        </div >
    )
};

export default ProductIndexItem;
