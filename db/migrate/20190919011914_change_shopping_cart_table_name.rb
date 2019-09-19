class ChangeShoppingCartTableName < ActiveRecord::Migration[5.2]
  def change
      rename_table :shopping_carts, :shopping_cart_items
  end
end
