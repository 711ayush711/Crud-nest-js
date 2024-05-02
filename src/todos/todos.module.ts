import { Module } from '@nestjs/common';
import { TodoService } from './todos.service';
import { TodoController } from './todos.controller';
import { PrismaService } from 'src/services/prisma.service';
import { LoggerService } from 'src/services/looger.service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService, PrismaService, LoggerService],
  exports: [TodoModule],
})
export class TodoModule {}
