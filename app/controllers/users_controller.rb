class UsersController < ApplicationController
  def create
    user_login = params[:login]
    if User.where(login: user_login).exists?
      render json: {status: -1, message: 'User ID Exists.'}
    else
      render json: {status: 0, messgae: 'Success!'}
    end
  end
end
