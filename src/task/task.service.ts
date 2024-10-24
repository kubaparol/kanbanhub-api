import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TaskService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTaskDto: Prisma.TaskCreateInput) {
    const maxOrder = await this.databaseService.task.findFirst({
      // @ts-expect-error No columnId in Prisma types
      where: { columnId: createTaskDto.columnId },
      orderBy: { order: 'desc' },
      select: { order: true },
    });

    const newOrder = (maxOrder?.order ?? 0) + 1;

    return this.databaseService.task.create({
      data: { ...createTaskDto, order: newOrder },
    });
  }

  async findAll() {
    return this.databaseService.task.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.task.findUnique({ where: { id } });
  }

  async update(id: string, updateTaskDto: Prisma.TaskUpdateInput) {
    const task = await this.databaseService.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new Error('Task not found');
    }

    const newOrder = (updateTaskDto.order || task.order) as number;

    if (newOrder > task.order) {
      await this.databaseService.task.updateMany({
        where: {
          columnId: task.columnId,
          order: {
            gte: task.order + 1,
            lte: newOrder,
          },
        },
        data: {
          order: {
            decrement: 1,
          },
        },
      });
    } else if (newOrder < task.order) {
      await this.databaseService.task.updateMany({
        where: {
          columnId: task.columnId,
          order: {
            gte: newOrder,
            lt: task.order,
          },
        },
        data: {
          order: {
            increment: 1,
          },
        },
      });
    }

    return this.databaseService.task.update({
      where: { id },
      data: { ...updateTaskDto, order: newOrder },
    });
  }

  async remove(id: string) {
    return this.databaseService.task.delete({ where: { id } });
  }
}
