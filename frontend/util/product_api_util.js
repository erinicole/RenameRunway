export const fetchProducts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/products'
    })
)

export const fetchProduct = id => {
    return(
    $.ajax({
        method: 'GET',
        url: `/api/products/${id}`
    })
    )
}

export const fetchShoppingCartProducts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/products/shopping_cart'
    })
)