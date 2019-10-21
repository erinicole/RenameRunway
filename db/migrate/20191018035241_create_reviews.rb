class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :user_id
      t.string :product_id
      t.string :body

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :product_id
  end
end
