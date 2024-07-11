import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BoardService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createBoardDto: Prisma.BoardCreateInput) {
    return this.databaseService.board.create({ data: createBoardDto });
  }

  async findAll() {
    return this.databaseService.board.findMany();
  }

  async findOne(id: string) {
    return this.databaseService.board.findUnique({ where: { id } });
  }

  async update(id: string, updateBoardDto: Prisma.BoardUpdateInput) {
    return this.databaseService.board.update({
      where: { id },
      data: updateBoardDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.board.delete({ where: { id } });
  }
}
