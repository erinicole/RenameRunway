@items.each do |item|
    json.set! item.id do
        json.extract! item, :product_id, :size, :quantity
    end
end