@shortlist_items.each do |shortlist_item|
    json.set! shortlist_item.id do
        json.partial! shortlist_item, :id, :product_id, :shortlist_id
    end
end