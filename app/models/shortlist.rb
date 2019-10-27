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

class Shortlist < ApplicationRecord
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    has_many :shortlist_items,
    primary_key: :id,
    foreign_key: :shortlist_id,
    class_name: :ShortlistItem

end
