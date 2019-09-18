class AddColumnsToUserTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :birthday, :date
    add_column :users, :zip_code, :integer
    add_column :users, :phone_number, :integer
    add_column :users, :height, :string
    add_column :users, :weight, :integer
    add_column :users, :bust_size, :string
    add_column :users, :body_type, :string
    add_column :users, :jean_size, :integer
    add_column :users, :dress_size, :integer
  end
end
