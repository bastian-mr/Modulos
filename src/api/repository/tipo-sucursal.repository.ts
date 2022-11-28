import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoSucursal } from '../entities';

@Injectable()
export class TipoSucursalRepository extends Repository<TipoSucursal> {
  private logger = new Logger('ActividadRepository', { timestamp: true });

  constructor(
    @InjectRepository(TipoSucursal) tipoSucursalRepo: Repository<TipoSucursal>,
  ) {
    super(
      tipoSucursalRepo.target,
      tipoSucursalRepo.manager,
      tipoSucursalRepo.queryRunner,
    );
  }
}
