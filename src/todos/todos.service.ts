import { HttpException, Injectable } from '@nestjs/common';
import { TodoType } from './types/todo.types';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}
  //create task
  async createTodo(todo: TodoType) {
    let createdTodo = await this.prisma.todo.create({ data: todo });
    if (!createdTodo) {
      throw new HttpException('Task not created', 400);
    }
    return createdTodo;
  }
  //GetAll task
  async getTodo() {
    let todoList = await this.prisma.todo.findMany({});
    if (!todoList) {
      throw new HttpException('Something went wrong on get data', 400);
    }
    return todoList;
  }
  //update task
  async updateTodo(id: number, todo: TodoType) {
    let validateTodo = await this.prisma.todo.findUnique({ where: { id } });
    if (!validateTodo) {
      throw new HttpException('No task Found', 400);
    }
    return this.prisma.todo.update({
      where: { id },
      data: todo,
    });
  }
  //delete task
  async deleteTodo(id: number) {
    let validateTodo = await this.prisma.todo.findUnique({ where: { id } });
    if (!validateTodo) {
      throw new HttpException('No task Found', 400);
    }
    return this.prisma.todo.delete({ where: { id } });
  }
}
