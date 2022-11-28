import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actividad } from '../entities';

@Injectable()
export class ActividadRepository extends Repository<Actividad> {
  private logger = new Logger('ActividadRepository', { timestamp: true });

  constructor(
    @InjectRepository(Actividad) actividadRepo: Repository<Actividad>,
  ) {
    super(
      actividadRepo.target,
      actividadRepo.manager,
      actividadRepo.queryRunner,
    );
  }
}
