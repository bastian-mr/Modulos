import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoAgencia } from '../entities';

@Injectable()
export class EstadoAgenciaRepository extends Repository<EstadoAgencia> {
  private logger = new Logger('EstadoAgenciaRepository', { timestamp: true });

  constructor(
    @InjectRepository(EstadoAgencia)
    estadoAgenciaRepo: Repository<EstadoAgencia>,
  ) {
    super(
      estadoAgenciaRepo.target,
      estadoAgenciaRepo.manager,
      estadoAgenciaRepo.queryRunner,
    );
  }
}
