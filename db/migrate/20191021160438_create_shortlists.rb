class CreateShortlists < ActiveRecord::Migration[5.2]
  def change
    create_table :shortlists do |t|
      t.string :title
      t.integer :user_id
      t.integer :shortlist_item_id

      t.timestamps
    end
      add_index :shortlists, :user_id
      add_index :shortlists, :shortlist_item_id
  end
end
