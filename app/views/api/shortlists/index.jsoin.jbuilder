@shortlists.each do |shortlist|
    json.set! shortlist.id do
        json.extract! shortlist, :id, :user_id, :title
    end
end