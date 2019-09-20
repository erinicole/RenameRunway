class Api::ItemsController < ApplicationController

    def show
        @item = Item.find(params[:id])
    end

    def index
        @items = Item.where(product_id: params[:product_id])
    end
    
    def update
        @item = Item.find(params[:id])

        unless @item.update(item_params)
            render json: @item.errors.full_messages, status: 422
        end
    end

    private

    def items_params
        params.require(:item).permit(:product_id, :size, :quantity)
    end

end
