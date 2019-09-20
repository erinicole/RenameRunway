import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCartItem = ({ closeModal }) => (
    <div className='shopping-cart-item-all'>
        <div> image goes here</div>
        <div className='shopping-cart-details'>
            <div onClick={closeModal} >X</div>
            <p>title</p>
            <p>Size: </p>
            <div>
                <p>$</p>
                <p>Edit</p>
            </div>
        </div>
    </div>
);

export default ShoppingCartItem;