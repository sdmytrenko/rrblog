class PostsController < ApplicationController

  before_action :find_post, only: [:show, :update, :destroy]

  def index
    @posts = Post.all
    render component: 'Posts', props: { posts: @posts }
  end

  def create
    @post = Post.new(post_params)
    # @post.user_id = current_user.id
    respond_to do |format|
      format.json do
        if @post.save
          render json: @post
        else
          render json: @post.errors.messages, status: :unprocessable_entity
        end
      end
    end
  end

  def show
    # @comments = @post.comments
    render component: 'ShowPost', props: { post: @post }
  end

  def update
    @post = Post.find(params[:id])
    respond_to do |format|
      format.json do
        if @post.update(post_params)
          render json: @post
        else
          render json: @post.errors.messages, status: :unprocessable_entity
        end
      end
    end
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.json { render :json => {}, :status => :no_content }
    end
  end

  private
    def find_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :description)
    end

end
