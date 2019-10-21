Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show] do
      resources :reviews, only: [ :create]
      collection do
        get 'shopping_cart'
      end
    end
    resources :shopping_cart_items, only: [:create, :index, :destroy]
    resources :items, only: [ :show, :index, :update]
    resources :reviews, only: [ :index, :update, :destroy]

  end  

  root to: "static_pages#root"
end
