import { Module } from '@nestjs/common';
import { ProcesosController } from './procesos.controller';
import { ProcesosService } from './procesos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proceso } from 'src/entities/proceso.entity';
import { ResultadosAprendizajeModule } from '../resultados-aprendizaje/resultados-aprendizaje.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Proceso]),
    ResultadosAprendizajeModule
  ],
  controllers: [ProcesosController],
  providers: [ProcesosService],
})
export class ProcesosModule {}
