class CreateShoppingCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_carts do |t|
      t.integer :user_id
      t.integer :product_id
      t.date :start_date

      t.timestamps
    end
  end
end
