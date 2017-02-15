Rails.application.routes.draw do

  # root to: 'posts#index'
  resources :posts do
    resources :comments#, shallow: true
  end

  root to: 'visitors#index'
  devise_for :users
  resources :users
end
