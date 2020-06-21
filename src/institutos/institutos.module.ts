import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instituto } from '../entities/instituto.entity';
import { InstitutosController } from './institutos.controller';
import { InstitutosService } from './institutos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Instituto])],
  controllers: [InstitutosController],
  providers: [InstitutosService],
})
export class InstitutosModule {}
