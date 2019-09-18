import { RECEIVE_SHOPPING_CART } from '../actions/shopping_cart_actions'

const ShoppingCartReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState
    switch (action.type) {
        case RECEIVE_SHOPPING_CART:
            newState = Object.assign({}, oldState, { [action.shoppingCart.id]: action.shoppingCart });
            return newState
        default:
            return oldState
    }
}

export default ShoppingCartReducer;