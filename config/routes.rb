Rails.application.routes.draw do
  #root to: 'posts#index'
  resources :posts

  root to: 'visitors#index'
  devise_for :users
  resources :users
end
