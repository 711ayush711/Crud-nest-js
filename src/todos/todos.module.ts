import { Module } from '@nestjs/common';
import { TodoService } from './todos.service';
import { TodoController } from './todos.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService, PrismaService],
  exports: [TodoModule],
})
export class TodoModule {}
