class Message < ActiveRecord::Base
  serialize :labels, Array

  def unread
    !read
  end
end
