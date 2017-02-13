class CommentsController < ApplicationController

  before_action :find_post

  def index
    @comments = Comment.where("post_id = #{params[:post_id]}")
  end

  def create
    @post = Post.find(params[:post_id])
    # @comment = @post.comment.new(comment_params)
    @comment = Comment.new(comment_params)
    # @comment.post_id = params[:post_id]
    # @comment.user = current.user
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    head :no_content
  end

  private
    def find_post
      @post = Post.find(params[:post_id])
    end

    def comment_params
      params.require(:comment).permit(:text)
    end
end
