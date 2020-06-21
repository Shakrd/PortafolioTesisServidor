import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContenidosController } from './contenidos.controller';
import { ContenidosService } from './contenidos.service';
import { Contenido } from 'src/entities/contenido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contenido])],
  controllers: [ContenidosController],
  providers: [ContenidosService]
})
export class ContenidosModule {}
