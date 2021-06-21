Rails.application.routes.draw do
  resources :animals
  resources :articles
  resources :widgets
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
