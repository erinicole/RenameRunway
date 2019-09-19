@shopping_carts.each do |shopping_cart|
    json.set! shopping_cart.id do
        json.extract! shopping_cart, :id, :user_id, :item_id, :start_date
    end
end