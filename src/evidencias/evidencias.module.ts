import { Module } from '@nestjs/common';
import { EvidenciasController } from './evidencias.controller';
import { EvidenciasService } from './evidencias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evidencia } from 'src/entities/evidencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evidencia])],
  controllers: [EvidenciasController],
  providers: [EvidenciasService]
})
export class EvidenciasModule {}
