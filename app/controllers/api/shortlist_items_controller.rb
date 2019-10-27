class Api::ShortlistItemsController < ApplicationController
    def index
        debugger
        current_shortlist = Shortlist.find(params[:shortlist_id])
        @shortlist_items = current_shortlist.shortlist_items
        # @shortlist_items = ShortlistItem.where(product_id: params[:product_id])
        debugger
        render json: @shortlist_items 

    end

    def destroy
        shortlist_item = ShortlistItem.find(params[:id])
        shortlist_item.destroy
        render json: shortlist_item.id #have to return the id to give back to the front end
    end

    private
    
    def shortlist_items_params
        params.require(:item).permit(:product_id, :shortlist_id)
    end

end
