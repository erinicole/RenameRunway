# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_18_192726) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "designers", force: :cascade do |t|
    t.string "designer_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "title", null: false
    t.integer "designer_id", null: false
    t.integer "category_id", null: false
    t.string "stylist_notes", null: false
    t.string "size_fit", null: false
    t.string "product_details", null: false
    t.integer "retail_price", null: false
    t.integer "rent_price", null: false
    t.string "color", null: false
    t.string "weather", null: false
    t.string "sleeves", null: false
    t.string "length"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_products_on_category_id"
    t.index ["designer_id"], name: "index_products_on_designer_id"
    t.index ["title"], name: "index_products_on_title", unique: true
  end

  create_table "shopping_carts", force: :cascade do |t|
    t.integer "user_id"
    t.integer "product_id"
    t.date "start_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.date "birthday"
    t.integer "zip_code"
    t.integer "phone_number"
    t.string "height"
    t.integer "weight"
    t.string "bust_size"
    t.string "body_type"
    t.integer "jean_size"
    t.integer "dress_size"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
