import { RECEIVE_SHOPPING_CART_ITEMS } from '../actions/shopping_cart_item_actions'
import { RECEIVE_SHOPPING_CART_ITEM } from '../actions/shopping_cart_item_actions'
import { REMOVE_SHOPPING_CART_ITEM } from '../actions/shopping_cart_item_actions'


const ShoppingCartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState
    switch (action.type) {
        case RECEIVE_SHOPPING_CART_ITEMS:
            return action.shoppingCartItems
        case RECEIVE_SHOPPING_CART_ITEM:
            newState = Object.assign({}, oldState, { [action.shoppingCartItem.id]: action.shoppingCartItem });
            return newState
        case REMOVE_SHOPPING_CART_ITEM:
            newState = Object.assign({}, oldState);
            delete newState[action.shoppingCartItemId]
            return newState
        default:
            return oldState
    }
}

export default ShoppingCartItemsReducer;