class SessionController < ApplicationController

  def create
    user = User.find_by :email => params[:email]
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path
    else
      flash[:error] = 'Invalid Login'
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end



  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end