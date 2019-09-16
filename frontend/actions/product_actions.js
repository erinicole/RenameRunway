import * as ProductAPIUtil from '../util/product_api_util'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'

const recieveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
})

const recieveProduct = product => ({
    type: RECEIVE_PRODUCT,
    products
})

export const fetchProducts = () => dispatch => (
    ProductAPIUtil.fetchProducts().then(products => dispatch(recieveProducts(products)))
)

export const fetchProduct = (id) => dispatch => (
    ProductAPIUtil.fetchProductid.then(product => dispatch(recieveProduct(product)))
)