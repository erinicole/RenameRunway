@shopping_cart_items.each do |shopping_cart_item|
    json.set! shopping_cart_item.id do
        json.extract! shopping_cart_item, :id, :user_id, :item_id, :start_date
    end
end