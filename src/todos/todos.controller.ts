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
import { LoggerService } from 'src/services/looger.service';

@Controller('api')
export class TodoController {
  constructor(
    private todoService: TodoService,
    private loggerService: LoggerService,
  ) {}

  @Get('/allTodo')
  allTodos(): Promise<TodoType[]> {
    this.loggerService.log('Get all task');
    return this.todoService.getTodo();
  }

  @Post('/addTodo')
  addTodo(@Body() todo: TodoType): Promise<TodoType> {
    this.loggerService.log('Add task');
    return this.todoService.createTodo(todo);
  }

  @Patch('/updateTodo/:id')
  updateTodo(
    @Param('id') id: string,
    @Body() newTodo: TodoType,
  ): Promise<TodoType> {
    this.loggerService.log('Update task');
    return this.todoService.updateTodo(+id, newTodo);
  }

  @Delete('/deleteTodo/:id')
  deleteTodo(@Param('id') id: string): Promise<TodoType> {
    this.loggerService.log('Delete task');
    return this.todoService.deleteTodo(+id);
  }
}
