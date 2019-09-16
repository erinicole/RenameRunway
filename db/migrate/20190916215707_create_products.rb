class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.integer :designer_id, null: false
      t.integer :category_id, null: false
      t.string :stylist_notes, null: false
      t.string :size_fit, null: false
      t.string :product_details, null: false
      t.integer :retail_price, null: false
      t.integer :rent_price, null: false
      t.string :color, null: false
      t.string :weather, null: false
      t.string :sleeves, null: false
      t.string :length

      t.timestamps
    end

    add_index :products, :title, unique: true
    add_index :products, :designer_id
    add_index :products, :category_id
  end
end
