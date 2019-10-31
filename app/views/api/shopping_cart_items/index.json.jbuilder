@shopping_cart_items.each do |shopping_cart_item|
    json.set! shopping_cart_item.id do
        json.partial! 'shopping_cart_item', shopping_cart_item: shopping_cart_item
    end
end


