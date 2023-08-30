class Api::RegistrationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    user = User.new(user_params)
    if user.save
      render json: { message: 'User registered successfully.' }
    else
      render json: { error: user.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end