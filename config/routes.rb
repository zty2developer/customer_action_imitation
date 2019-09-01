Rails.application.routes.draw do
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users do
  end

  get '/customer_sessions', to: 'customer_sessions#index'
  post '/submit_result', to: 'customer_sessions#submit_result'

  get '/with_prediction', to: redirect('/session-html-client/html/welcome.html')
  get '/without_prediction', to: redirect('/session-html-no-client/html/welcome.html')
  get '/with_prediction_fixed_confidence', to: redirect('/session-html-c-client/html/welcome.html')
  get '/without_prediction_fixed_confidence', to: redirect('/session-html-no-d-client/html/welcome.html')
end
