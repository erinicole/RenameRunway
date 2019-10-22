class ChangeColumnTypesInReviewTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :user_id
    remove_column :reviews, :product_id

    add_column :reviews, :user_id, :integer
    add_column :reviews, :product_id, :integer
  end
end
