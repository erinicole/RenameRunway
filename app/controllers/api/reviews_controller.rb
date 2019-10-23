class Api::ReviewsController < ApplicationController
    before_action :require_signin
    skip_before_action :require_signin, only: [:index]


    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.product_id = review_params[:product_id]
        if @review.save
            # redirect_to product_url(@review.product_id)
        else
            render json: @review.errors.full_messages, status: 404
        end
    end

    def index
        # debugger
        #how we get current product?
        current_url  = request.env['PATH_INFO']
        #if includes users or if includes products
        if current_url.include?('products')
            current_product = Product.find(params[:product_id])
            @reviews = current_product.reviews
        # elsif current_url.include?('users')
        else
            @reviews = current_user.reviews
        end
        render json: {} unless @reviews
    end

    def update
        debugger
        # current_product = Product.find(params[:product_id])
        # @review = current_product.find(params[:id])
        @review = Review.find(params[:id])

        if @review.update(review_params)
            # redirect_to review_url(@review)
            render json: @review
        else
            flash.now[:errors] = @review.errors.full_messages
            # render :new
        end
    end

    def destroy
        # current_product = Product.find(params[:product_id])
        # review = current_product.reviews.find(params[:id])
        review = Review.find(params[:id])
        review.destroy
        # redirect_to product_url(review.product_id)
    end

    private

    def review_params
        params.require(:review).permit( :user_id, :product_id, :body)
    end
end
