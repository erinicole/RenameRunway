# == Schema Information
#
# Table name: items
#
#  id         :bigint           not null, primary key
#  product_id :integer
#  size       :integer
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Item < ApplicationRecord

    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product

end
