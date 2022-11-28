import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CampoAnexoDTO } from '../dto/campo-anexoDTO';
import { CampoAnexo } from '../entities';
import { CampoRepository } from '../repository';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class CampoAnexoService {
  constructor(
    private campoRepository: CampoRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  getCampos(): Promise<CampoAnexo[]> {
    return this.campoRepository.find({});
  }

  async getCampo(id: number) {
    const campo = await this.campoRepository.findOneBy({ id });
    if (!campo) {
      this.logger.warn(`campo con id ${id} no encontrado`);
      throw new HttpException(`campo con id ${id} no encontrado`, 400);
    }
    return campo;
  }

  async createCampo(newCampo: CampoAnexoDTO) {
    const { nombre, alias, descripcion } = newCampo;
    const newCampoAnexo = this.campoRepository.create({
      nombre,
      alias,
      descripcion,
    });

    try {
      await this.campoRepository.save(newCampoAnexo);
    } catch (error) {
      this.logger.error(`error al crear campo: ${error}`);
      throw new HttpException(`error al crear campo: ${error}`, 400);
    }
    return newCampoAnexo;
  }
}
