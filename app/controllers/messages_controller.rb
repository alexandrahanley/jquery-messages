class MessagesController < ApplicationController

  def update
    @message = Message.find(params[:id])
    @message.update!(params.require(:message).permit(:read, :unread, :starred, :labels))
    render nothing: true
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    render nothing: true
  end

end
