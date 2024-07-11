import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ColumnService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createColumnDto: Prisma.ColumnCreateInput) {
    return this.databaseService.column.create({ data: createColumnDto });
  }

  findAll() {
    return this.databaseService.column.findMany();
  }

  findOne(id: string) {
    return this.databaseService.column.findUnique({ where: { id } });
  }

  update(id: string, updateColumnDto: Prisma.ColumnUpdateInput) {
    return this.databaseService.column.update({
      where: { id },
      data: updateColumnDto,
    });
  }

  remove(id: string) {
    return this.databaseService.column.delete({ where: { id } });
  }
}
