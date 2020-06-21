import { Module } from '@nestjs/common';
import { FinalidadesController } from './finalidades.controller';
import { FinalidadesService } from './finalidades.service';
import { Finalidad } from 'src/entities/finalidad.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Finalidad])],
  controllers: [FinalidadesController],
  providers: [FinalidadesService]
})
export class FinalidadesModule {}
