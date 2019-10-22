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

require 'test_helper'

class ShortlistItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
