# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#  product_id :integer
#

class Review < ApplicationRecord
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :products,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product   

end
