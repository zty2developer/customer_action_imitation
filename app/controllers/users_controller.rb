class UsersController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    user_login = params[:login]
    with_prediction = params[:with_prediction]
    if user_login.blank? || with_prediction.blank?
      render json: {status: -1, message: 'login and with_prediction parameter required.'}
      return
    end

    if User.where(login: user_login).exists?
      render json: {status: -1, message: 'User ID Exists.'}
    else
      user = User.new(login: user_login)
      if with_prediction == 'true'
        user.with_prediction = true
      elsif with_prediction == 'false'
        user.with_prediction = false
      else
        render json: {status: -1, message: 'parameter with_prediction is incorrect.'}
        return
      end
      user.save
      render json: {status: 0, user_id: user.id}
    end
  end
end
