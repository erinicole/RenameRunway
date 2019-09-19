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

require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
