# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#  birthday        :date
#  zip_code        :integer
#  phone_number    :integer
#  height          :string
#  weight          :integer
#  bust_size       :string
#  body_type       :string
#  jean_size       :integer
#  dress_size      :integer
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
