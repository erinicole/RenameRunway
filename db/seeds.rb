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
ShoppingCart.destroy_all

User1 = User.create!(email: "rrr", password:"123456", first_name: "Toyin", last_name: "Pierce", zip_code: 27514, phone_number: 919, height: "5\'8\"", weight: 130, jean_size: 26, dress_size: 4 )
User2 = User.create!(email: "abcdefg", password:"123456", first_name: "Erin", last_name: "Hill", zip_code: 94541, phone_number: 650, height: "5\'5\"", weight: 140, jean_size: 28, dress_size: 6 )
User3 = User.create!(email: "hijklmn", password:"123456", first_name: "Jessica", last_name: "Spry", zip_code: 02224, phone_number: 851, height: "5\'10\"", weight: 160, jean_size: 29, dress_size: 8 )

Categories = Category.create!([{ name: 'Outerwear' }, { name: 'Dresses' }, { name: 'Bottoms' }])

Designers = Designer.create!([{ designer_name: 'NevaeH' }, { designer_name: 'Tosin & Funmi' }, { designer_name: 'Lamkin Files' },
            { designer_name: 'M. Choi' }, { designer_name: 'Nnamdi Jenkins' }, { designer_name: 'Aditi Patel' },
            { designer_name: 'Jaylen J. Johnson' }, { designer_name: 'Stonequeen' }, { designer_name: 'Mamie Falls' },
            { designer_name: 'WildCutter' }])




Product1= Product.create!(title: "Salient Style Wool Coat", designer_id: 1, category_id: 1, 
    stylist_notes: "A textured wool-blend trench coat, featuring a notched collar, long sleeves, slant pockets, and a button closures.", 
    product_details: "60% rayon, 40% wool. Hand wash cold. Fully lined. 38in from shoulder to hemline. Imported.", 
    size_fit:"Model is 5' 9\" and wearing a Small", retail_price: 550, rent_price: 100, color: "black", weather: "YEAR ROUND", 
    sleeves: "LONG SLEEVES")

Product2= Product.create!(title: "Along for the Ride Coat", designer_id: 2, category_id: 1, 
    stylist_notes: "This awesome crossover jacket in virgin wool is an essential part of your transition weather wardrobe. Its edges bring contrast and a rock touch to any outfit.", 
    product_details: "Black wool (55% Virgin Wool, 36% Cotton, 9% Polyamide). Jacket. Long sleeves. Fully lined. 24\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'9\" and wearing a Small. This product tends to run larger.", retail_price: 943, rent_price: 160, color: "yellow", weather: "COLD WEATHER", 
    sleeves: "LONG SLEEVES") 

Product3= Product.create!(title: "Set for the Solstice Coat", designer_id: 3, category_id: 1, 
    stylist_notes: "A sleek matte look, this military-inspired mid-length jacket by Kernel Sanders. We love styled over turtleneck dresses.", 
    product_details: "Green cotton (100% Cotton). Jacket. Long sleeves. Exposed front zipper closure. Pockets. 22.5\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'8\" and wearing a Small. This product tends to run larger.", retail_price: 725, rent_price: 125, color: "green", weather: "COLD WEATHER", 
    sleeves: "LONG SLEEVES")

Product4= Product.create!(title: "Kotto Faux Fur Jacket", designer_id: 4, category_id: 1, 
    stylist_notes: "A cozy faux fur jacket featuring a drawstring cowl neck, long raglan sleeves, and a zippered kangaroo pocket.", 
    product_details: "Brown Faux fur (100% Faux fur). Jacket. Long sleeves/ Hidden front hook-and-eye closures. Fully lined. 21.75\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'10\" and wearing a Small.", retail_price: 575, rent_price: 100, color: "brown", weather: "WARM WEATHER", 
    sleeves: "LONG SLEEVES")   

Product5= Product.create!(title: "Looking Lively Faux Fur Jacket", designer_id: 5, category_id: 1, 
    stylist_notes: "Keep warm in cold weather with this faux fur jacket, featuring a hood, purple everything, ribbed trim, front zip closure with a pull ring, and a woven lining.", 
    product_details: "Lilac crepe (100% Polyester). Jacket. Long sleeves. Fully lined. Tie closure at waist. 27.5\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'8\" and wearing a Small. This product tends to run larger.", retail_price: 185, rent_price:30, color: "purple", weather: "WARM WEATHER", 
    sleeves: "LONG SLEEVES")
    
Product6= Product.create!(title: "Escape to Nature Coat", designer_id:6, category_id: 1, 
    stylist_notes: "Keep warm in cold weather with this faux fur jacket, featuring a hood, purple everything, ribbed trim, front zip closure with a pull ring, and a woven lining.", 
    product_details: "Lilac crepe (100% Polyester). Jacket. Long sleeves. Fully lined. Tie closure at waist. 27.5\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'8\" and wearing a Small. This product tends to run larger.", retail_price: 185, rent_price:30, color: "purple", weather: "WARM WEATHER", 
    sleeves: "LONG SLEEVES")  

Item1 = Item.create!(product_id: 1, size: 4, quantity: 10 )
Item2 = Item.create!(product_id: 2, size: 6, quantity: 10 )
Item3 = Item.create!(product_id: 3, size: 8, quantity: 10 )
Item4 = Item.create!(product_id: 2, size: 10, quantity: 10 )

Shopping_Cart1 = ShoppingCart.create!(user_id: 2, item_id: 1 )
Shopping_Cart2 = ShoppingCart.create!(user_id: 2, item_id: 2 )
Shopping_Cart3 = ShoppingCart.create!(user_id: 3, item_id: 3 )
Shopping_Cart4 = ShoppingCart.create!(user_id: 3, item_id: 4 )



