export const fetchItems = (product_id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/items?product_id=${product_id}`
        })
    )
}

export const fetchItem = (id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/items/${id}`
        })
    )
}

export const updateItem = (item) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/items/${item.id}`,
            data: { data }
        })
    )
}