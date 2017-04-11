Rails.application.routes.draw do
  
  # devise
  devise_for :admins

  # admins
  get '/admin' => 'admins#admin'  
  # blogs
  mount Ckeditor::Engine => '/ckeditor'

  
  resources :blogs

  # top
  root 'home#top'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
