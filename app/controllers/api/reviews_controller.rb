class Api::ReviewsController < ApplicationController
    # before_action :require_signin

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.product_id = params[:product_id]
        if @review.save
            redirect_to product_url(@review.product_id)
        else
            render json: @review.errors.full_messages, status: 404
        end
    end

    def index
        # debugger
        #how we get current product?
        current_product = Product.find(params[:product_id])
        @reviews = current_product.reviews
        render json: {} unless @reviews
    end

    def update
        current_product = Product.find(params[:product_id])
        @review = current_product.find(params[:id])

        if @review.update_attributes(review_params)
            redirect_to product_url(@review)
        else
            flash.now[:errors] = @review.errors.full_messages
            render :new
        end
    end

    def destroy
        current_product = Product.find(params[:product_id])
        review = current_product.reviews.find(params[:id])
        review.destroy
        redirect_to product_url(review.product_id)
    end

    private

    def review_params
        params.require(:review).permit(:user_id, :product_id, :body)
    end
end
