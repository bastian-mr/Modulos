import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities';

@Injectable()
export class UsuarioRepository extends Repository<Usuario> {
  private logger = new Logger('UsusarioRepository', { timestamp: true });

  constructor(
    @InjectRepository(Usuario) usuarioRepo: Repository<Usuario>,
  ) {
    super(
      usuarioRepo.target,
      usuarioRepo.manager,
      usuarioRepo.queryRunner,
    );
  }
}
