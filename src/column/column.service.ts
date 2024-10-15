import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ColumnService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createColumnDto: Prisma.ColumnCreateInput) {
    return this.databaseService.column.create({
      data: createColumnDto,
      include: { tasks: true },
    });
  }

  async findAll() {
    return this.databaseService.column.findMany({ include: { tasks: true } });
  }

  async findOne(id: string) {
    return this.databaseService.column.findUnique({ where: { id } });
  }

  async update(id: string, updateColumnDto: Prisma.ColumnUpdateInput) {
    return this.databaseService.column.update({
      where: { id },
      data: updateColumnDto,
    });
  }

  async remove(id: string) {
    await this.databaseService.task.deleteMany({ where: { columnId: id } });
    return this.databaseService.column.delete({ where: { id } });
  }
}
