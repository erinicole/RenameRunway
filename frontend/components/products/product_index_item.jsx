import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = props => {
    const state = props.product

    return (
        < div >
            <div className='product-card'>
                <div className='heart-container'>
                    <img className='product-like-heart' src={window.images.heart} />
                    <div className='primary-area'>
                        <div className='product-wrapper-2-images'>
                            <div className='product-cycle-image-1' > </div>
                            <div className='product-cycle-image-2' > </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-card-details'>
                <h2 className='product-card-designer'></h2>
                <p className='product-card-title'></p>
                <div className='product-card-price'>
                    <span className='product-rent-price'>{state.rent_price} </span>
                    <span className='product-retail-price'>{state.retail_price} </span>
                </div>
            </div>
        </div >
    )
};

export default ProductIndexItem;
