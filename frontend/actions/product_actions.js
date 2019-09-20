import * as ProductAPIUtil from '../util/product_api_util'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

const recieveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
})

const recieveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
})


export const fetchProducts = () => dispatch => (
    ProductAPIUtil.fetchProducts().then(products => dispatch(recieveProducts(products)))
)

export const fetchProduct = (id) => dispatch =>{
    return(
    ProductAPIUtil.fetchProduct(id).then(product => dispatch(recieveProduct(product)))
)}

export const fetchShoppingCartProducts = () => dispatch => (
    ProductAPIUtil.fetchShoppingCartProducts().then(products => dispatch(recieveProducts(products)))
)