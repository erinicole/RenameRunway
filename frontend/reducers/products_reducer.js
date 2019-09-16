import { RECEIVE_PRODUCTS } from '../actions/product_actions'
import { RECEIVE_PRODUCT } from '../actions/product_actions'

const productReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products
        case RECEIVE_PRODUCT:
            newState = Object.assign({}, oldState, { [action.product.id]: action.product});
            return newState
        default:
            return oldState
    }
}

export default productReducer;