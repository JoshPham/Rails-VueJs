Rails.application.routes.draw do
  namespace :api do
    devise_for :users, controllers: { registrations: 'api/registrations' }
    devise_for :users, controllers: { sessions: 'api/sessions' }
  end
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
