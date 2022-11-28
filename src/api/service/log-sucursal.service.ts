import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { LogSucursalDto, UpdateLogSucursalDto } from '../dto';
import { LogSucursal } from '../entities';

import { LogSucursalRepository } from '../repository';

@Injectable()
export class LogSucursalService {
  constructor(
    private logSucursalRepository: LogSucursalRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getLogsSucursales(): Promise<LogSucursal[]> {
    return this.logSucursalRepository.find({});
  }

  async getLogSucursal(id: number) {
    const logSucursal = await this.logSucursalRepository.findOneBy({ id });
    if (!logSucursal) {
      this.logger.warn(`log sucursal con id ${id} no encontrado`);
      throw new HttpException(`log sucursal con id ${id} no encontrado`, 400);
    }
    return logSucursal;
  }

  async createLogSucursal(newLogSucursalc: LogSucursalDto) {
    const {
      cod_suc,
      log_fec_ing,
      usu_cod,
      scf_codsuc,
      valor_antig,
      valor_nuevo,
      campo_mod,
    } = newLogSucursalc;
    const newLogSucursal = this.logSucursalRepository.create({
      cod_suc,
      log_fec_ing,
      usu_cod,
      scf_codsuc,
      valor_antig,
      valor_nuevo,
      campo_mod,
    });
    try {
      await this.logSucursalRepository.save(newLogSucursal);
    } catch (error) {
      this.logger.error(`error al crear campo: ${error}`);
      throw new HttpException(`error al crear campo: ${error}`, 400);
    }
    return newLogSucursal;
  }

  async deleteLogSucursal(id: number): Promise<LogSucursal> {
    const logSucursal = await this.getLogSucursal(id);
    if (!logSucursal) {
      this.logger.warn(`log sucursal con id ${id} no encontrado`);
      throw new HttpException(`log sucursal con id ${id} no encontrado`, 400);
    }
    return await this.logSucursalRepository.remove(logSucursal);
  }

  async updateLogSucursal(
    id: number,
    dto: UpdateLogSucursalDto,
  ): Promise<LogSucursal> {
    const logSucursal = await this.getLogSucursal(id);

    const editedLogSucursal = Object.assign(logSucursal, dto);
    return await this.logSucursalRepository.save(editedLogSucursal);
  }
}
