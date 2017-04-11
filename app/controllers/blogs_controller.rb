class BlogsController < ApplicationController

  before_action :blog_get, only: [:show, :edit, :update, :destroy]

  def new
  	@blog = Blog.new
  end

  def create
  	@blog = Blog.new(blog_params)
  	@blog.save
  	redirect_to blog_path(@blog)
  end

  def index
  	@blogs = Blog.all 
  end

  def show
  end

  def edit
  end

  def update
  	@blog.update(blog_params)
  end

  def destroy
  	@blog.destroy
  	redirect_to blogs_path
  end

private

  def blog_get 
  	@blog = Blog.find(params[:id])
  end	

  def blog_params
  	params.require(:blog).permit(:title, :content)
  end

end
