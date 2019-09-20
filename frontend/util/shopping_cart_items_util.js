export const fetchShoppingCartItems = () => {
    return (
        $.ajax({
            method: 'GET',
            url: 'api/shopping_cart_items'
        })
    )
}

export const createShoppingCartItem = (shopping_cart_item) => {
    return (
        $.ajax({
            method: 'POST',
            url:'api/shopping_cart_items',
            data: { shopping_cart_item }
        })
    )
}

export const deleteShoppingCartItem = (id) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/shopping_cart_items/${id}`
        })
    )
}