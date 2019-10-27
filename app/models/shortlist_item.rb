# == Schema Information
#
# Table name: shortlist_items
#
#  id           :bigint           not null, primary key
#  shortlist_id :integer
#  product_id   :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class ShortlistItem < ApplicationRecord

    belongs_to :shortlist,
    primary_key: :id,
    foreign_key: :shortlist_id,
    class_name: :Shortlist

    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product

end
