class DropColumnShortlistItemId < ActiveRecord::Migration[5.2]
  def change
        remove_column :shortlists, :shortlist_item_id
  end
end
