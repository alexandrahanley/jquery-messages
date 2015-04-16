Rails.application.routes.draw do
  root to: "pages#index"
  get 'styleguide' => 'pages#styleguide'

  resources :messages
end
