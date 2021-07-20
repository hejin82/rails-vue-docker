Rails.application.routes.draw do
  resources :tasks, path_names: { new: :add_new, edit: :edit_new}
  # resources :projects
  # resources :animals
  # resources :articles
  # resources :widgets
  # get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
