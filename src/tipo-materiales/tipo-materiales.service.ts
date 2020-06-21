import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TipoMaterial } from '../entities/tipoMaterial.entity';

@Injectable()
export class TipoMaterialesService extends TypeOrmCrudService<TipoMaterial> {
  constructor(@InjectRepository(TipoMaterial) repo: any) {
    super(repo);
  }
}
