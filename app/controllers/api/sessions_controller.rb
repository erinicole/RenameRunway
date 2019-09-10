class Api::SessionsController < ApplicationController
      def create
        @user = User.find_by_cred(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid email or password combination"], status: 401
        end
    end

    def destroy
        if !current_user
            render json: ['Not signed in'], status: 404
        else
            logout
            render json: {}
        end
    end

end
