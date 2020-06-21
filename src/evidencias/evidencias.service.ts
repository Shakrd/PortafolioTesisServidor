import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Evidencia } from 'src/entities/evidencia.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EvidenciasService extends TypeOrmCrudService<Evidencia> {
    constructor(@InjectRepository(Evidencia) repo: any) {
        super(repo);
    }
}
