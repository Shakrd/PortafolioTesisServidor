import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EstrategiaMetodologica } from 'src/entities/estrategiaMetodologica.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstrategiasMetodologicasService extends TypeOrmCrudService<EstrategiaMetodologica> {
    constructor(@InjectRepository(EstrategiaMetodologica) repo: any) {
        super(repo)
    }

    async getEstrategiasAndFinalidad(idSilabo: number): Promise<EstrategiaMetodologica[]> {
        const estrategias = await this.find({where: {silabo: idSilabo}});
        return estrategias;
    }

    async deleteManyEstrategias(estrategias: EstrategiaMetodologica[]): Promise<any[]> {
        const eliminados = await this.repo.remove(estrategias);

        return [eliminados];
    }


}
