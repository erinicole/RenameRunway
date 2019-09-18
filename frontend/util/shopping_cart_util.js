export const fetchShoppingCart = id => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/shopping_carts/${id}`
        })
    )
}