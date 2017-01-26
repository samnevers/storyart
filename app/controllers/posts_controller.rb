class PostsController < ApplicationController

  def home
  end

  def create
    @post = Post.create post_params
    redirect_to "/posts/#{@post.id}"
  end

  def show
    @post = Post.find_by :id => params[:id]
    # @input = Post.find_by :input => params[ :input ]

  end

  private
    def post_params
      params.permit(:input, :animate)
    end

end
