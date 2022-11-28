import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from '../entities';

@Injectable()
export class EmpresaRepository extends Repository<Empresa> {
  private logger = new Logger('EmpresaRepository', { timestamp: true });

  constructor(@InjectRepository(Empresa) empresaRepo: Repository<Empresa>) {
    super(empresaRepo.target, empresaRepo.manager, empresaRepo.queryRunner);
  }
}
