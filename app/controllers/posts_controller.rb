class PostsController < ApplicationController

  def home
  end

  def create

    @post = Post.create post_params
    redirect_to "/posts/#{@post.id}"
  end

  private
    def post_params
      params.permit(:input)
    end

end
