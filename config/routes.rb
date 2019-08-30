Rails.application.routes.draw do
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users do
  end

  get '/customer_sessions', to: 'customer_sessions#index'
  post '/submit_result', to: 'customer_sessions#submit_result'
end
