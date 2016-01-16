Rails.application.routes.draw do


  resources :searches
  resources :users
  resources :pages

  get '/info' => 'pages#info'

  root 'pages#index'

end
