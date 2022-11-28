import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { TipoSucursalDto, UpdateTipoSucursalDto } from '../dto';
import { TipoSucursal } from '../entities';
import { TipoSucursalRepository } from '../repository';

@Injectable()
export class TipoSucursalService {
  constructor(
    private tipoSucursalesRepository: TipoSucursalRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getTiposSucursales(): Promise<TipoSucursal[]> {
    return this.tipoSucursalesRepository.find({});
  }

  async getTipoSucursal(id: string) {
    const tiposucursal = await this.tipoSucursalesRepository.findOneBy({ id });
    if (!tiposucursal) {
      this.logger.warn(`tipo sucursal con id ${id} no encontrado`);
      throw new HttpException(`tipo sucursal con id ${id} no encontrado`, 400);
    }
    return tiposucursal;
  }

  async createTipoSucursal(newTipoSucursalc: TipoSucursalDto) {
    const { descripcion, tip_activo } = newTipoSucursalc;
    const newTipoSucursal = this.tipoSucursalesRepository.create({
      descripcion,
      tip_activo,
    });
    try {
      await this.tipoSucursalesRepository.save(newTipoSucursal);
    } catch (error) {
      this.logger.error(`error al crear campo: ${error}`);
      throw new HttpException(`error al crear campo: ${error}`, 400);
    }
    return newTipoSucursal;
  }

  async deleteTipoSucursal(id: string): Promise<TipoSucursal> {
    const actividad = await this.getTipoSucursal(id);
    if (!actividad) {
      this.logger.warn(`actividad con id ${id} no encontrado`);
      throw new HttpException(`actividad con id ${id} no encontrado`, 400);
    }
    return await this.tipoSucursalesRepository.remove(actividad);
  }

  async updateTipoSucursal(
    id: string,
    dto: UpdateTipoSucursalDto,
  ): Promise<TipoSucursal> {
    const actividad = await this.getTipoSucursal(id);

    const editedActividad = Object.assign(actividad, dto);
    return await this.tipoSucursalesRepository.save(editedActividad);
  }
}
