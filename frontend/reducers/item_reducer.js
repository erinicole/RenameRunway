import { RECEIVE_ITEMS } from '../actions/item_action'
import { RECEIVE_ITEM } from '../actions/item_action'


const ItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState
    switch (action.type) {
        case RECEIVE_ITEMS:
            return action.items
        case RECEIVE_ITEM:
            newState = Object.assign({}, oldState, { [action.item.id]: action.item });
            return newState
        default:
            return oldState
    }
}

export default ItemsReducer;