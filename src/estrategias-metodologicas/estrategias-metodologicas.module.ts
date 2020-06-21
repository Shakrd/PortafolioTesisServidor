import { Module } from '@nestjs/common';
import { EstrategiasMetodologicasController } from './estrategias-metodologicas.controller';
import { EstrategiasMetodologicasService } from './estrategias-metodologicas.service';
import { EstrategiaMetodologica } from 'src/entities/estrategiaMetodologica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EstrategiaMetodologica])],
  controllers: [EstrategiasMetodologicasController],
  providers: [EstrategiasMetodologicasService]
})
export class EstrategiasMetodologicasModule {}
