import * as ShoppingCartItemAPIUtil from '../util/shopping_cart_items_util'

export const RECEIVE_SHOPPING_CART_ITEMS = 'RECEIVE_SHOPPING_CART_ITEMS'
export const RECEIVE_SHOPPING_CART_ITEM = 'RECEIVE_SHOPPING_CART_ITEM'
export const REMOVE_SHOPPING_CART_ITEMS = 'REMOVE_SHOPPING_CART_ITEMS'


const recieveShoppingCartItems = shoppingCartItems => ({
    type: RECEIVE_SHOPPING_CART_ITEMS,
    shoppingCartItems
})

const recieveShoppingCartItem = shoppingCartItem => ({
    type: RECEIVE_SHOPPING_CART_ITEM,
    shoppingCartItem
})

const removeShoppingCartItem = id => ({
    type: REMOVE_SHOPPING_CART_ITEMS,
    shoppingCartItemId: id

})

export const fetchShoppingCartItems = () => dispatch => {
    return (
        ShoppingCartItemAPIUtil.fetchShoppingCartItems().then(shoppingCartItems => dispatch(recieveShoppingCartItems(shoppingCartItems)))
    )
}

export const createShoppingCartItem = (shoppingCartiItem) => dispatch => {
    return (
        ShoppingCartItemAPIUtil.createShoppingCartItem(shoppingCartiItem).then(shoppingCartiItem => dispatch(recieveShoppingCartItem(shoppingCartiItem)))
    )
}

export const deleteShoppingCartItem = (id) => dispatch => {
    return (
        ShoppingCartItemAPIUtil.deleteShoppingCartItem(id).then(shoppingCartiItem => dispatch(removeShoppingCartItem(shoppingCartiItem)))
    )
}