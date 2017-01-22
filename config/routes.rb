Rails.application.routes.draw do

  root 'posts#home'

  get '/home' => 'posts#home'

  resources :posts

end
