import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sucursal } from '../entities';


@Injectable()
export class SucursalRepository extends Repository<Sucursal> {
  private logger = new Logger('SucursalRepository', { timestamp: true });

  constructor(
    @InjectRepository(Sucursal) sucursalRepo: Repository<Sucursal>,
  ) {
    super(
      sucursalRepo.target,
      sucursalRepo.manager,
      sucursalRepo.queryRunner,
    );
  }
}
