import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { FeriadoDto, UpdateFestivoDto } from '../dto';
import { DiaFeriado } from '../entities';
import { DiaFeriadoRepository } from '../repository';

@Injectable()
export class DiaFeriadoService {
  constructor(
    private diaFeriadoRepository: DiaFeriadoRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getFeriados(): Promise<DiaFeriado[]> {
    return this.diaFeriadoRepository.find({});
  }

  async getFeriado(id: number) {
    const feriado = await this.diaFeriadoRepository.findOneBy({ id });
    if (!feriado) {
      this.logger.warn(`feriado con id ${id} no encontrado`);
      throw new HttpException(`feriado con id ${id} no encontrado`, 400);
    }
    return feriado;
  }

  async createFeriados(newFeriado: FeriadoDto) {
    const { dfe_fecha, dfe_a_o, dfe_descrip, dfe_dia_cod } = newFeriado;
    const newFestivo = this.diaFeriadoRepository.create({
      dfe_fecha,
      dfe_a_o,
      dfe_descrip,
      dfe_dia_cod,
    });
    try {
      await this.diaFeriadoRepository.save(newFestivo);
    } catch (error) {
      this.logger.error(`error al crear campo: ${error}`);
      throw new HttpException(`error al crear campo: ${error}`, 400);
    }
    return newFestivo;
  }

  async deleteFeriados(id: number): Promise<DiaFeriado> {
    const festivo = await this.getFeriado(id);
    if (!festivo) {
      this.logger.warn(`festivo con id ${id} no encontrado`);
      throw new HttpException(`festivo con id ${id} no encontrado`, 400);
    }
    return this.diaFeriadoRepository.remove(festivo);
  }

  async updateFeriados(id: number, dto: UpdateFestivoDto): Promise<DiaFeriado> {
    const feriado = await this.getFeriado(id);

    const editedFestivo = Object.assign(feriado, dto);
    return this.diaFeriadoRepository.save(editedFestivo);
  }
}
