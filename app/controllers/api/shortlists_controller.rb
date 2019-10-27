class Api::ShortlistsController < ApplicationController
    before_action :require_signin

    def create
         @shortlist = Shortlist.new(shortlist_params)
        if @shortlist.save
            render json: @shortlist
        else
            render json: @shortlist.errors.full_messages, status: 404
        end
    end

    def index
        @shortlists = current_user.shortlists
        render json: @shortlists 
    end

    def update
        @shortlist = Shortlist.find(params[:id])

        if @shortlist.update(shortlist_params)
            render json: @shortlist
        else
            flash.now[:errors] = @shortlist.errors.full_messages
        end
    end

    def destroy
        shortlist = Shortlist.find(params[:id])
        shortlist.destroy
        render json: shortlist.id #have to return the id to give back to the front end
    end

    def shortlist_params
        params.require(:shortlist).permit(:title, :user_id)
    end
    
end
