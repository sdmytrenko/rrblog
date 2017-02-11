Rails.application.routes.draw do
  
  #root to: 'posts#index'
  resources :posts do
    resources :comments
  end

  root to: 'visitors#index'
  devise_for :users
  resources :users
end
