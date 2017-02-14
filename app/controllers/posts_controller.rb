class PostsController < ApplicationController

  # before_action :find_post, only: [:show, :update, :destroy]

  def index
    @posts = Post.all
    render component: 'Posts', props: { posts: @posts }
  end

  # def create
  #   @post = Post.new(post_params)
  #   # @post.user_id = current_user.id
  #   if @post.save
  #     render json: @post
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end

  # def show
  #   @comments = @post.comments
  # end

  # def update
  #   if @post.update(post_params)
  #     render json: @post
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   @post.destroy
  #   head :no_content
  # end

  # private
  #   def find_post
  #     @post = Post.find(params[:id])
  #   end

  #   def post_params
  #     params.require(:post).permit(:title, :description)
  #   end

end
