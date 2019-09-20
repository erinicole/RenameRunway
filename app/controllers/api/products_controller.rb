class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
    end

    def show
        @product = Product.find(params[:id])
    end

    def shopping_cart
        @products = current_user.shopping_cart_products
        render 'api/products/index'
    end
end
