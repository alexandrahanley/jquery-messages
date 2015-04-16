class PagesController < ApplicationController

  def index
    @messages = Message.order(:id)
  end

end
