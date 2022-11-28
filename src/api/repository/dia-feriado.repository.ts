import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DiaFeriado } from '../entities';

@Injectable()
export class DiaFeriadoRepository extends Repository<DiaFeriado> {
  constructor(
    @InjectRepository(DiaFeriado) diaFeriadodRepo: Repository<DiaFeriado>,
  ) {
    super(
      diaFeriadodRepo.target,
      diaFeriadodRepo.manager,
      diaFeriadodRepo.queryRunner,
    );
  }
}
