@shortlist_items.each do |shortlist_item|
    json.set! shortlist_item.id do
        json.extract! shortlist_item, :id, :product_id, :shortlist_id
    end
end