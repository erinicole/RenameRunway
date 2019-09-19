# == Schema Information
#
# Table name: shopping_cart_items
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  start_date :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  item_id    :integer
#

class ShoppingCartItem < ApplicationRecord
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :product,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Product
end
