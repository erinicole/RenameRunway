class UpdateColumnsAndNamesMultipleTables < ActiveRecord::Migration[5.2]
  def change

    remove_column :shopping_carts, :product_id
    add_column :shopping_carts, :item_id, :integer
    add_index :shopping_carts, :user_id
    add_index :shopping_carts, :item_id

  end
end
