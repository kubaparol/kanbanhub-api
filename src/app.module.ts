import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { DatabaseModule } from './database/database.module';
import { ColumnModule } from './column/column.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [BoardModule, DatabaseModule, ColumnModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
