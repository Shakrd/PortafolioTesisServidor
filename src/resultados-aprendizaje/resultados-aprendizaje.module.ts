import { Module } from '@nestjs/common';
import { ResultadosAprendizajeController } from './resultados-aprendizaje.controller';
import { ResultadosAprendizajeService } from './resultados-aprendizaje.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultadoAprendizaje } from 'src/entities/resultadoAprendizaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResultadoAprendizaje])],
  controllers: [ResultadosAprendizajeController],
  providers: [ResultadosAprendizajeService],
  exports: [ResultadosAprendizajeService]
})
export class ResultadosAprendizajeModule {}
