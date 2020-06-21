import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Malla } from '../entities/malla.entity';

@Injectable()
export class MallasService extends TypeOrmCrudService<Malla> {
  constructor(@InjectRepository(Malla) repo: any) {
    super(repo);
  }
}
