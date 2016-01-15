Rails.application.routes.draw do
  resources :searches
  resources :users
  resources :pages

  root :to => 'pages#index'
end
