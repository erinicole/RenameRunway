# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
Designer.destroy_all
Product.destroy_all
User.destroy_all
Category.destroy_all
Item.destroy_all
ShoppingCartItem.destroy_all

User1 = User.create!(email: "rrr", password:"123456", first_name: "Toyin", last_name: "Pierce", zip_code: 27514, phone_number: 919, height: "5\'8\"", weight: 130, jean_size: 26, dress_size: 4 )
User2 = User.create!(email: "abcdefg", password:"123456", first_name: "Erin", last_name: "Hill", zip_code: 94541, phone_number: 650, height: "5\'5\"", weight: 140, jean_size: 28, dress_size: 6 )
User3 = User.create!(email: "hijklmn", password:"123456", first_name: "Jessica", last_name: "Spry", zip_code: 02224, phone_number: 851, height: "5\'10\"", weight: 160, jean_size: 29, dress_size: 8 )

Category1 = Category.create!(name: 'Outerwear')
Category2 = Category.create!(name: 'Dresses' )
Category3 = Category.create!(name: 'Bottoms' )

Designer1 = Designer.create!(designer_name: 'NevaeH')
Designer2 = Designer.create!(designer_name: 'Tosin & Funmi')
Designer3 = Designer.create!(designer_name: 'Lamkin Files')
Designer4 = Designer.create!(designer_name: 'Aditi Patel' )
Designer5 = Designer.create!(designer_name: 'Mamie Falls')
Designer6 = Designer.create!(designer_name: 'Stonequeen')
Designer7 = Designer.create!(designer_name: 'Nnamdi Jenkins' )
Designer8 = Designer.create!(designer_name: 'M. Choi')
Designer9 = Designer.create!(designer_name: 'Jaylen J. Johnson')
Designer10 = Designer.create!(designer_name: 'WildCutter')

Product1= Product.create!(title: "Salient Style Wool Coat", designer_id: Designer1.id, category_id: Category1.id, 
    stylist_notes: "A textured wool-blend trench coat, featuring a notched collar, long sleeves, slant pockets, and a button closures.", 
    product_details: "60% rayon, 40% wool. Hand wash cold. Fully lined. 38in from shoulder to hemline. Imported.", 
    size_fit:"Model is 5' 9\" and wearing a Small", retail_price: 550, rent_price: 100, color: "black", weather: "YEAR ROUND", 
    sleeves: "LONG SLEEVES")

Product2= Product.create!(title: "Along for the Ride Coat", designer_id: Designer2.id, category_id: Category1.id, 
    stylist_notes: "This awesome crossover jacket in virgin wool is an essential part of your transition weather wardrobe. Its edges bring contrast and a rock touch to any outfit.", 
    product_details: "Black wool (55% Virgin Wool, 36% Cotton, 9% Polyamide). Jacket. Long sleeves. Fully lined. 24\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'9\" and wearing a Small. This product tends to run larger.", retail_price: 943, rent_price: 160, color: "yellow", weather: "COLD WEATHER", 
    sleeves: "LONG SLEEVES") 

Product3= Product.create!(title: "Set for the Solstice Coat", designer_id: Designer3.id, category_id: Category1.id, 
    stylist_notes: "A sleek matte look, this military-inspired mid-length jacket by Kernel Sanders. We love styled over turtleneck dresses.", 
    product_details: "Green cotton (100% Cotton). Jacket. Long sleeves. Exposed front zipper closure. Pockets. 22.5\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'8\" and wearing a Small. This product tends to run larger.", retail_price: 725, rent_price: 125, color: "green", weather: "COLD WEATHER", 
    sleeves: "LONG SLEEVES")

Product4= Product.create!(title: "Kotto Faux Fur Jacket", designer_id: Designer4.id, category_id: Category1.id, 
    stylist_notes: "A cozy faux fur jacket featuring a drawstring cowl neck, long raglan sleeves, and a zippered kangaroo pocket.", 
    product_details: "Brown Faux fur (100% Faux fur). Jacket. Long sleeves/ Hidden front hook-and-eye closures. Fully lined. 21.75\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'10\" and wearing a Small.", retail_price: 575, rent_price: 100, color: "brown", weather: "WARM WEATHER", 
    sleeves: "LONG SLEEVES")   

Product5= Product.create!(title: "Looking Lively Faux Fur Jacket", designer_id: Designer5.id, category_id: Category1.id, 
    stylist_notes: "Keep warm in cold weather with this faux fur jacket, featuring a hood, purple everything, ribbed trim, front zip closure with a pull ring, and a woven lining.", 
    product_details: "Lilac crepe (100% Polyester). Jacket. Long sleeves. Fully lined. Tie closure at waist. 27.5\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'8\" and wearing a Small. This product tends to run larger.", retail_price: 185, rent_price:30, color: "purple", weather: "WARM WEATHER", 
    sleeves: "LONG SLEEVES")
    
Product6= Product.create!(title: "Escape to Nature Coat", designer_id: Designer6.id, category_id: Category1.id, 
    stylist_notes: "Keep warm in cold weather with this faux fur jacket, featuring a hood, purple everything, ribbed trim, front zip closure with a pull ring, and a woven lining.", 
    product_details: "Lilac crepe (100% Polyester). Jacket. Long sleeves. Fully lined. Tie closure at waist. 27.5\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'8\" and wearing a Small. This product tends to run larger.", retail_price: 185, rent_price:30, color: "purple", weather: "WARM WEATHER", 
    sleeves: "LONG SLEEVES")  

Item1 = Item.create!(product_id: Product1.id, size: 4, quantity: 10 )
Item2 = Item.create!(product_id: Product2.id, size: 6, quantity: 10 )
Item3 = Item.create!(product_id: Product3.id, size: 8, quantity: 10 )
Item4 = Item.create!(product_id: Product2.id, size: 10, quantity: 10 )
Item5 = Item.create!(product_id: Product4.id, size: 0, quantity: 10 )
Item6 = Item.create!(product_id: Product5.id, size: 2, quantity: 10 )
Item7 = Item.create!(product_id: Product6.id, size: 14, quantity: 10 )
Item8 = Item.create!(product_id: Product4.id, size: 12, quantity: 10 )

Shopping_Cart1 = ShoppingCartItem.create!(user_id: User1.id, item_id: Item1.id )
Shopping_Cart2 = ShoppingCartItem.create!(user_id: User1.id, item_id: Item2.id )
Shopping_Cart3 = ShoppingCartItem.create!(user_id: User2.id, item_id: Item3.id )
Shopping_Cart4 = ShoppingCartItem.create!(user_id: User2.id, item_id: Item1.id )
Shopping_Cart5 = ShoppingCartItem.create!(user_id: User3.id, item_id: Item3.id )
Shopping_Cart6 = ShoppingCartItem.create!(user_id: User3.id, item_id: Item4.id )


