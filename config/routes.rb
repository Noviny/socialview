Rails.application.routes.draw do


  resources :searches
  resources :users
  resources :pages
  resources :hubs

  get '/info' => 'pages#info'

  root 'pages#index'

  post 'login' => 'session#create'
  delete '/login' => 'session#destroy'

  get '/hub' => 'hubs#index'

end
