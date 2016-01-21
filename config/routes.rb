Rails.application.routes.draw do



  resources :searches
  resources :users
  resources :pages
  resources :hubs
  resources :tweets

  get '/test' => 'pages#test'

  get '/info' => 'pages#info'

  root 'pages#index'

  post 'login' => 'session#create'
  delete '/login' => 'session#destroy'

  get '/hub' => 'hubs#index'
  get '/tweet' => 'tweets#index'
  post '/tweet/search' => 'tweets#search'

end
