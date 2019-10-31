class Api::ShoppingCartItemsController < ApplicationController
    before_action :require_signin

    def create
        @shopping_cart_item = ShoppingCartItem.new(shopping_cart_item_params)
        @shopping_cart_item.user_id = current_user.id
        @shopping_cart_item.item_id = shopping_cart_item_params[:item_id]

        if @shopping_cart_item.save
            render :show
        else
            render json: @shopping_cart_item.errors.full_messages, status: 404
        end
        # unless @shopping_cart_item.save
        #     render json: @shopping_cart_item.errors.full_messages, status: 404
        # end
    end
    #retrieving all of the current user  items,  not just all items
    def index
        debugger
        @shopping_cart_items = current_user.shopping_cart_items
        render json: {} unless @shopping_cart_items
    end

    def destroy
        shopping_cart_item = ShoppingCartItem.find(params[:id])
        shopping_cart_item.destroy
        render json: shopping_cart_item.id #have to return the id to give back to the front end
    end

    private

    def shopping_cart_item_params
        params.require(:shopping_cart_item).permit(:user_id, :item_id, :start_date)
    end
end
