class ApplicationController < ActionController::Base

  # User.find(session[:user_id])

  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  def authorize
    redirect_to '/login' unless current_user
  end
end
