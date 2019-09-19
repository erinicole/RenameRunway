import * as ItemAPIUtil from '../util/item_api_util'

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const RECEIVE_ITEM = 'RECEIVE_ITEM'

const recieveItems = items => ({
    type: RECEIVE_ITEMS,
    items
})

const recieveItem = item => ({
    type: RECEIVE_ITEM,
    item
})

export const fetchItems = (product_id) => dispatch => {
    return (
        ItemAPIUtil.fetchItems(product_id).then(items => dispatch(recieveItems(items)))
    )
}

export const fetchItem = (id) => dispatch => {
    return (
        ItemAPIUtil.fetchItem(id).then(item => dispatch(recieveItem(item)))
    )
}

export const updateItem = (item) => dispatch => {
    return (
        ItemAPIUtil.fetchItem(item).then(item => dispatch(recieveItem(item)))
    )
}