class UsersController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    user_login = params[:login]
    if User.where(login: user_login).exists?
      render json: {status: -1, message: 'User ID Exists.'}
    else
      user = User.new(login: user_login)
      user.save
      render json: {status: 0, user_id: user.id}
    end
  end
end
