import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Instituto } from '../entities/instituto.entity';

@Injectable()
export class InstitutosService extends TypeOrmCrudService<Instituto>{
    constructor (@InjectRepository(Instituto) repo: any) {
		super(repo)
	}
}
