class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def create
    @post = Post.new(post_params)
    #@post.user = current.user
    if @post.save
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  private
    def post_params
      params.require(:post).permit(:title, :description)
    end

end
