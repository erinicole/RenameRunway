# == Schema Information
#
# Table name: designers
#
#  id            :bigint           not null, primary key
#  designer_name :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Designer < ApplicationRecord

    has_many :products,
    primary_key: :id,
    foreign_key: :designer_id,
    class_name: :Product

end
