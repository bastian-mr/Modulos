import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { HorarioLaboralDto, UpdateHorarioLaboralDto } from '../dto';
import { HorarioLaboral } from '../entities';
import { HorarioLaboralRepository } from '../repository';

@Injectable()
export class HorarioLaboralService {
  constructor(
    private horarioLaboralRepository: HorarioLaboralRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getHorariosLaborales(): Promise<HorarioLaboral[]> {
    return this.horarioLaboralRepository.find({});
  }

  async getHorarioLaboral(id: number) {
    const horario = await this.horarioLaboralRepository.findOneBy({ id });
    if (!horario) {
      this.logger.warn(`horario con id ${id} no encontrado`);
      throw new HttpException(`horario con id ${id} no encontrado`, 400);
    }
    return horario;
  }

  async createHorarioLaboral(newHorarioDto: HorarioLaboralDto) {
    const {
      hor_codsuc,
      hor_dia_cod,
      hor_apertura,
      hor_apercierre,
      hor_personalizado,
    } = newHorarioDto;
    const newHorario = this.horarioLaboralRepository.create({
      hor_codsuc,
      hor_dia_cod,
      hor_apertura,
      hor_apercierre,
      hor_personalizado,
    });
    try {
      await this.horarioLaboralRepository.save(newHorario);
    } catch (error) {
      this.logger.error(`error al crear campo: ${error}`);
      throw new HttpException(`error al crear campo: ${error}`, 400);
    }
    return newHorario;
  }

  async deleteHorarioLaboral(id: number): Promise<HorarioLaboral> {
    const horario = await this.getHorarioLaboral(id);
    if (!horario) {
      this.logger.warn(`horario con id ${id} no encontrado`);
      throw new HttpException(`horario con id ${id} no encontrado`, 400);
    }
    return this.horarioLaboralRepository.remove(horario);
  }

  async updateHorarioLaboral(
    id: number,
    dto: UpdateHorarioLaboralDto,
  ): Promise<HorarioLaboral> {
    const horario = await this.getHorarioLaboral(id);

    const editedHorario = Object.assign(horario, dto);
    return this.horarioLaboralRepository.save(editedHorario);
  }
}
