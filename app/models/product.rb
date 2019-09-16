# == Schema Information
#
# Table name: products
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  designer_id     :integer          not null
#  category_id     :integer          not null
#  stylist_notes   :string           not null
#  size_fit        :string           not null
#  product_details :string           not null
#  retail_price    :integer          not null
#  rent_price      :integer          not null
#  color           :string           not null
#  weather         :string           not null
#  sleeves         :string           not null
#  length          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Product < ApplicationRecord
    # has_many: designers,
    # product_id: :id,
    # foreign_key: :designer_id,
    # class: :Designers

    # has_many: categories,
    # product_id: :id,
    # foreign_key: :category_id,
    # class: :Categories

end
