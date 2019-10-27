Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :reviews, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show] do
      resources :reviews, only: [ :index]
      collection do
        get 'shopping_cart'
      end
    end
    resources :shopping_cart_items, only: [:create, :index, :destroy]
    resources :items, only: [ :show, :index, :update]
    resources :reviews, only: [ :create , :update, :destroy]
    resources :shortlists, only: [:create, :index, :update, :destroy] do
      resources :shortlist_items, only: [ :index]
    end
    resources :shortlist_items, only: [ :destroy]

  end  

  root to: "static_pages#root"
end
