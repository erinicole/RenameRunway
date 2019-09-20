    json.extract! shopping_cart_item, :id, :user_id, :item_id, :start_date

    json.extract! shopping_cart_item.product, :title, :rent_price

    json.extract! shopping_cart_item.item, :size