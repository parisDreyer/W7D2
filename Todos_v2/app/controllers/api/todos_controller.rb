module Api
  class TodosController < ApplicationController
    def show
      render json: Todo.find(params[:id])
    end

    def index
      @todos = Todo.all
      render json: @todos
    end
    
    def destroy
      @todo = Todo.find(params[:id])
      @todo.destroy
      render index
    end
    
    def create
      @todo = Todo.new(todos_params)
      if @todo.save
        render json: @todo
      else
        render json: @todo.errors.full_messages, status: 422
      end
    end
    
    def update
      @todo = Todo.find(params[:id])
      if @todo.update_attributes(todos_params)
        render json: @todo
      else
        render json: @todo.errors.full_messages, status: 422
      end
    end  
    
    def todos_params
      params.require(:todo).permit(:title, :body, :done)
    end
  end
end

