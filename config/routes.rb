Rails.application.routes.draw do

  root 'posts#home'

  get '/home' => 'posts#create'

  resources :posts

end
