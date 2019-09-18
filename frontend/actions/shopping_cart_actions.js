import * as ShoppingCartAPIUtil from '../util/shopping_cart_util'

export const RECEIVE_SHOPPING_CART = 'RECEIVE_SHOPPING_CART'


const recieveShoppingCart = shoppingCart => ({
    type: RECEIVE_SHOPPING_CART,
    shoppingCart
})

export const fetchShoppingCart = (id) => dispatch => {
    return (
        ShoppingCartAPIUtil.fetchShoppingCart(id).then(shoppingCart => dispatch(recieveShoppingCart(shoppingCart)))
    )
}