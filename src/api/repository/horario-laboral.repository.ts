import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HorarioLaboral } from '../entities';

@Injectable()
export class HorarioLaboralRepository extends Repository<HorarioLaboral> {
  private logger = new Logger('ActividadRepository', { timestamp: true });

  constructor(
    @InjectRepository(HorarioLaboral)
    horarioLaboralRepo: Repository<HorarioLaboral>,
  ) {
    super(
      horarioLaboralRepo.target,
      horarioLaboralRepo.manager,
      horarioLaboralRepo.queryRunner,
    );
  }
}
