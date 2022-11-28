import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogSucursal } from '../entities';

@Injectable()
export class LogSucursalRepository extends Repository<LogSucursal> {
  private logger = new Logger('ActividadRepository', { timestamp: true });

  constructor(
    @InjectRepository(LogSucursal) logSucursalRepo: Repository<LogSucursal>,
  ) {
    super(
      logSucursalRepo.target,
      logSucursalRepo.manager,
      logSucursalRepo.queryRunner,
    );
  }
}
