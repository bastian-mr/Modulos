import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { UpdateUsuarioDto, UsuarioDto } from '../dto';

import { Usuario } from '../entities';
import { UsuarioRepository } from '../repository';

@Injectable()
export class UsuarioService {
  constructor(
    private usuarioRepository: UsuarioRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getUsuarios(): Promise<Usuario[]> {
    return this.usuarioRepository.find({});
  }

  async getUsuario(id: string) {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
      this.logger.warn(`usuario con id ${id} no encontrado`);
      throw new HttpException(`usuario con id ${id} no encontrado`, 400);
    }
    return usuario;
  }

  async createUsuario(newUsuarioc: UsuarioDto) {
    const { nombre, apellido1, apellido2, usu_act, usu_fec_ing, usu_clave } =
      newUsuarioc;
    const newUsuario = this.usuarioRepository.create({
      nombre,
      apellido1,
      apellido2,
      usu_act,
      usu_fec_ing,
      usu_clave,
    });
    try {
      await this.usuarioRepository.save(newUsuario);
    } catch (error) {
      this.logger.error(`error al crear campo: ${error}`);
      throw new HttpException(`error al crear campo: ${error}`, 400);
    }
    return newUsuario;
  }

  async deleteUsuario(id: string): Promise<Usuario> {
    const usuario = await this.getUsuario(id);
    if (!usuario) {
      this.logger.warn(`usuario con id ${id} no encontrado`);
      throw new HttpException(`usuario con id ${id} no encontrado`, 400);
    }
    return await this.usuarioRepository.remove(usuario);
  }

  async updateUsuario(id: string, dto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.getUsuario(id);
    const editedUsuario = Object.assign(usuario, dto);
    return await this.usuarioRepository.save(editedUsuario);
  }
}
