import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCartItem = ({ shoppingCartItem, deleteShoppingCartItem }) => (
    <div className='shopping-cart-item-all'>
        {console.log(shoppingCartItem)}
        <img className='shopping-cart-item-img' src={window.images.testd} alt='dress' />
        <div className='shopping-cart-details'>
            <div className='shopping-cart-two'>
                <p>title</p>
                <div onClick={() => deleteShoppingCartItem(shoppingCartItem.id)} >X</div>
            </div>
            <p>Size: </p>
            <div className='shopping-cart-two'>
                <p>$</p>
                <p>Edit</p>
            </div>
        </div>
    </div>
);

export default ShoppingCartItem;