import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Malla } from '../entities/malla.entity';
import { MallasController } from './mallas.controller';
import { MallasService } from './mallas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Malla])],
  controllers: [MallasController],
  providers: [MallasService],
})
export class MallasModule {}
