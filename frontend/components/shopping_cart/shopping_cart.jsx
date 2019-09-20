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
                    closeModal={this.props.closeModal}
                />
            )}
        )

        return (
            <div>
                <ul>
                    {shoppingCartItems}
                </ul>
            </div>
        );
    }
}

export default ShoppingCart;