# == Schema Information
#
# Table name: shortlists
#
#  id         :bigint           not null, primary key
#  title      :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ShortlistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
