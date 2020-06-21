import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Carrera } from '../entities/carrera.entity';

@Injectable()
export class CarrerasService extends TypeOrmCrudService<Carrera> {
  constructor(@InjectRepository(Carrera) repo: any) {
    super(repo);
  }
}
