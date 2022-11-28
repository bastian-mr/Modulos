import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { EstadoAgenciaDto, UpdateEstadoAgenciaDto } from '../dto';
import { EstadoAgencia } from '../entities';
import { EstadoAgenciaRepository } from '../repository';

@Injectable()
export class EstadoAgenciaService {
  constructor(
    private estadoAgenciaRepository: EstadoAgenciaRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getEstadosAgencias(): Promise<EstadoAgencia[]> {
    return this.estadoAgenciaRepository.find({});
  }

  async getEstadoAgencia(id: string) {
    const actividad = await this.estadoAgenciaRepository.findOneBy({ id });
    if (!actividad) {
      this.logger.warn(`actividad con id ${id} no encontrado`);
      throw new HttpException(`actividad con id ${id} no encontrado`, 400);
    }
    return actividad;
  }

  async createEstadoAgencia(newEstadoAgenciac: EstadoAgenciaDto) {
    const { descripcion, est_activo } = newEstadoAgenciac;
    const newEstadoAgencia = this.estadoAgenciaRepository.create({
      descripcion,
      est_activo,
    });
    try {
      await this.estadoAgenciaRepository.save(newEstadoAgencia);
    } catch (error) {
      this.logger.error(`error al crear campo: ${error}`);
      throw new HttpException(`error al crear campo: ${error}`, 400);
    }
    return newEstadoAgencia;
  }

  async deleteEstadoAgencia(id: string): Promise<EstadoAgencia> {
    const estadoAgencia = await this.getEstadoAgencia(id);
    if (!estadoAgencia) {
      this.logger.warn(`estado agencia con id ${id} no encontrado`);
      throw new HttpException(`estado agencia con id ${id} no encontrado`, 400);
    }
    return await this.estadoAgenciaRepository.remove(estadoAgencia);
  }

  async updateEstadoAgencia(
    id: string,
    dto: UpdateEstadoAgenciaDto,
  ): Promise<EstadoAgencia> {
    const estadoAgencia = await this.getEstadoAgencia(id);

    const editedEstadoAgencia = Object.assign(estadoAgencia, dto);
    return await this.estadoAgenciaRepository.save(editedEstadoAgencia);
  }
}
