export const fetchItems = () => {
    return (
        $.ajax({
            method: 'GET',
            url: 'api/items'
        })
    )
}

export const fetchItem = (id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/items/${id}`
        })
    )
}

export const updateItem = (item) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `api/items/${item.id}`,
            data: { data }
        })
    )
}