import { Module } from '@nestjs/common';
import { SilabosController } from './silabos.controller';
import { SilabosService } from './silabos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Silabo } from '../entities/silabo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Silabo])],
  controllers: [SilabosController],
  providers: [SilabosService]
})
export class SilabosModule {}
