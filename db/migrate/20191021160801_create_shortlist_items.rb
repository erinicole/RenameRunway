class CreateShortlistItems < ActiveRecord::Migration[5.2]
  def change
    create_table :shortlist_items do |t|
      t.integer :shortlist_id
      t.integer :product_id

      t.timestamps
    end
      add_index :shortlist_items, :shortlist_id
      add_index :shortlist_items, :product_id

  end
end
