import { Module } from '@nestjs/common';
import { TodoModule } from './todos/todos.module';

@Module({
  imports: [TodoModule],
})
export class AppModule {}
