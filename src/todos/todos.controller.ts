import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todos.service';
import { TodoType } from './types/todo.types';

@Controller('api')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/allTodo')
  allTodos(): Promise<TodoType[]> {
    return this.todoService.getTodo();
  }

  @Post('/addTodo')
  addTodo(@Body() todo: TodoType): Promise<TodoType> {
    return this.todoService.createTodo(todo);
  }

  @Patch('/updateTodo/:id')
  updateTodo(
    @Param('id') id: string,
    @Body() newTodo: TodoType,
  ): Promise<TodoType> {
    return this.todoService.updateTodo(+id, newTodo);
  }

  @Delete('/deleteTodo/:id')
  deleteTodo(@Param('id') id: string): Promise<TodoType> {
    return this.todoService.deleteTodo(+id);
  }
}
