# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.delete_all

Product1= Product.create(title: "Salient Style Wool Coat", designer_id: 1, category_id: 1, 
    stylist_notes: "A textured wool-blend trench coat, featuring a notched collar, long sleeves, slant pockets, and a button closures.", 
    product_details: "60% rayon, 40% wool. Hand wash cold. Fully lined. 38in from shoulder to hemline. Imported.", 
    size_fit:"Model is 5' 9\" and wearing a Small", retail_price: 550, rent_price: 100, color: "black", weather: "YEAR ROUND", 
    sleeves: "LONG SLEEVES")

Product2= Product.create(title: "Along for the Ride Coat", designer_id: 2, category_id: 1, 
    stylist_notes: "This awesome crossover jacket in virgin wool is an essential part of your transition weather wardrobe. Its edges bring contrast and a rock touch to any outfit.", 
    product_details: "Black wool (55% Virgin Wool, 36% Cotton, 9% Polyamide). Jacket. Long sleeves. Fully lined. 24\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'9\" and wearing a Small. This product tends to run larger.", retail_price: 943, rent_price: 160, color: "yellow", weather: "COLD WEATHER", 
    sleeves: "LONG SLEEVES") 

Product3= Product.create(title: "Set for the Solstice Coat", designer_id: 3, category_id: 1, 
    stylist_notes: "A sleek matte look, this military-inspired mid-length jacket by Kernel Sanders. We love styled over turtleneck dresses.", 
    product_details: "Green cotton (100% Cotton). Jacket. Long sleeves. Exposed front zipper closure. Pockets. 22.5\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'8\" and wearing a Small. This product tends to run larger.", retail_price: 725, rent_price: 125, color: "green", weather: "COLD WEATHER", 
    sleeves: "LONG SLEEVES")

Product4= Product.create(title: "Kotto Faux Fur Jacket", designer_id: 4, category_id: 1, 
    stylist_notes: "A cozy faux fur jacket featuring a drawstring cowl neck, long raglan sleeves, and a zippered kangaroo pocket.", 
    product_details: "Brown Faux fur (100% Faux fur). Jacket. Long sleeves/ Hidden front hook-and-eye closures. Fully lined. 21.75\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'10\" and wearing a Small.", retail_price: 575, rent_price: 100, color: "brown", weather: "WARM WEATHER", 
    sleeves: "LONG SLEEVES")   

Product5= Product.create(title: "Looking Lively Faux Fur Jacket", designer_id: 5, category_id: 1, 
    stylist_notes: "Keep warm in cold weather with this faux fur jacket, featuring a hood, purple everything, ribbed trim, front zip closure with a pull ring, and a woven lining.", 
    product_details: "Lilac crepe (100% Polyester). Jacket. Long sleeves. Fully lined. Tie closure at waist. 27.5\" from shoulder to hemline. Imported.", 
    size_fit:"Model is 5\'8\" and wearing a Small. This product tends to run larger.", retail_price: 185, rent_price:30, color: "purple", weather: "WARM WEATHER", 
    sleeves: "LONG SLEEVES")   


