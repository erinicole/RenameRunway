class Api::ShoppingCartsController < ApplicationController

    def show
        @shopping_cart = ShopingCart.find(params[:id])
    end

    
end
