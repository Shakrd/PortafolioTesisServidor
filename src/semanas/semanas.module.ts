import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Semana } from 'src/entities/semana.entity';
import { SemanasController } from './semanas.controller';
import { SemanasService } from './semanas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Semana])],
  controllers: [SemanasController],
  providers: [SemanasService]
})
export class SemanasModule {}
