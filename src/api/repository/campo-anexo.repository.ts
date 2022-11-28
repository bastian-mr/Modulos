import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CampoAnexo } from '../entities';

@Injectable()
export class CampoRepository extends Repository<CampoAnexo> {
  private logger = new Logger('CampoRepository', { timestamp: true });

  constructor(@InjectRepository(CampoAnexo) campoRepo: Repository<CampoAnexo>) {
    super(campoRepo.target, campoRepo.manager, campoRepo.queryRunner);
  }
}
