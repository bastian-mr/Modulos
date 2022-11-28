import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ActividadDto, UpdateActividadDto } from '../dto';
import { Actividad } from '../entities';
import { ActividadRepository } from '../repository';

@Injectable()
export class ActividadService {
  constructor(
    private actividadRepository: ActividadRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getActividades(): Promise<Actividad[]> {
    const actividades = this.actividadRepository.find({});
    return actividades;
  }

  async getActividad(id: string) {
    const actividad = await this.actividadRepository.findOneBy({ id });
    if (!actividad) {
      this.logger.warn(`actividad con id ${id} no encontrado`);
      throw new HttpException(`actividad con id ${id} no encontrado`, 204);
    }
    return { message: 'Actividades encontrada con éxito', ...actividad };
  }

  async createActividad(newActividadc: ActividadDto) {
    const { descripcion, act_activa, id } = newActividadc;
    const newActividad = this.actividadRepository.create({
      descripcion,
      act_activa,
      id,
    });
    try {
      await this.actividadRepository.save(newActividad);
    } catch (error) {
      this.logger.error(`Error al crear campo: ${error}`);
      throw new HttpException(`Error al crear campo: ${error}`, 400);
    }
    return { message: 'Actividades creada con éxito', ...newActividad };
  }

  async deleteActividad(id: string) {
    const actividad = await this.getActividad(id);
    if (!actividad) {
      this.logger.warn(`Actividad con id ${id} no encontrado`);
      throw new HttpException(`Actividad con id ${id} no encontrado`, 204);
    }
    try {
      await this.actividadRepository.remove(actividad);
    } catch (error) {
      this.logger.warn(`Actividad con id ${id} no pudo ser eliminado`);
      throw new HttpException(
        `Actividad con id ${id} no pudo ser eliminado`,
        204,
      );
    }
    return { message: 'Actividades eliminada con éxito', ...actividad };
  }

  async updateActividad(id: string, dto: UpdateActividadDto) {
    const actividad = await this.getActividad(id);
    const editedActividad = Object.assign(actividad, dto);
    const savedActividad = await this.actividadRepository.save(editedActividad);
    return { message: 'Actividades editada con éxito', ...savedActividad };
  }
}
