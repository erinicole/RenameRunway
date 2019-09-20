import React from 'react';
import ShoppingCartItem from './shopping_cart_item'


class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    };


    componentDidMount() {
        this.props.fetchShoppingCartItems();
    }

    render() {
        const shoppingCartItems = this.props.shoppingCartItems.map(shoppingCartItem => {

            //this is making multiple item presentational containers
            return (
                <ShoppingCartItem
                    key={shoppingCartItem.id}
                    shoppingCartItem={shoppingCartItem}
                    deleteShoppingCartItem={this.props.deleteShoppingCartItem}

                />
            )
        }
        )

        return (
            <div className='shopping-cart-all'>
                <div className='shopping-cart-box'>
                    <div className='shopping-cart-top'> Items will stay in your cart for 20 minutes</div>
                    <ul>
                        {shoppingCartItems}
                    </ul>
                    <div className='shopping-cart-total' ></div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;