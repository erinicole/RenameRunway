json.extract! shopping_cart, :id, :user_id, :product_id, :start_date

json.extract! shopping_cart.product, :title, :designer_id, 
                        :category_id, :stylist_notes, 
                        :size_fit, :product_details, :retail_price,
                        :rent_price, :color, :weather, :sleeves,
                        :length

json.extract! shopping_cart.user, :email, :first_name, :last_name,
    :birthday, :zip_code, :phone_number, :height, :weight,
    :bust_size, :body_type, :jean_size, :dress_size