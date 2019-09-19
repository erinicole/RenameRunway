class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :product_id
      t.integer :size
      t.integer :quantity

      t.timestamps
    end

    add_index :items, :product_id


  end
end
