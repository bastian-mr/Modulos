import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
  Inject,
  UseInterceptors,
} from '@nestjs/common';
import { HorarioLaboralDto, UpdateHorarioLaboralDto } from '../dto';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { HorarioLaboralService } from '../service';
import { TransformInterceptor } from '../utils';

@UseInterceptors(TransformInterceptor)
@Controller('horario')
export class HorarioController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private horarioLaboralService: HorarioLaboralService,
  ) {}

  @Get()
  async findAllHorario() {
    const horario = await this.horarioLaboralService.getHorariosLaborales();
    this.logger.info(
      `method: findAllHorario, req:null, response: ${JSON.stringify(horario)}`,
    );
    return horario;
  }

  @Post()
  async create(@Body() createHorarioDto: HorarioLaboralDto) {
    const data = await this.horarioLaboralService.createHorarioLaboral(
      createHorarioDto,
    );
    console.log(createHorarioDto);
    return { message: 'Horario Sucursal Creado', data };
  }

  @Get(':id')
  async getHorarioSucursalById(@Param('id') id: number) {
    const data = await this.horarioLaboralService.getHorarioLaboral(id);
    this.logger.info(
      `method: getHorarioById, req:${id}, response:${JSON.stringify(data)}`,
    );
    return data;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const data = await this.horarioLaboralService.deleteHorarioLaboral(id);
    this.logger.info(
      `method: delete, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Horario Sucursal eliminado', data };
  }

  @Put(':id')
  async update(
    @Body() updateHorarioLaboralDto: UpdateHorarioLaboralDto,
    @Param('id') id: number,
  ) {
    const data = await this.horarioLaboralService.updateHorarioLaboral(
      id,
      updateHorarioLaboralDto,
    );
    this.logger.info(
      `method: update, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Horario Sucursal Modificado', data };
  }
}
