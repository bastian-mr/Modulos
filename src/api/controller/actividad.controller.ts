import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Inject,
  UseInterceptors,
} from '@nestjs/common';

import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { ActividadDto, UpdateActividadDto } from '../dto';
import { ActividadService } from '../service';
import { TransformInterceptor } from '../utils';

@UseInterceptors(TransformInterceptor)
@Controller('actividad')
export class ActividadController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private actividadService: ActividadService,
  ) {}

  @Get()
  async findAllActividades() {
    const actividades = await this.actividadService.getActividades();
    this.logger.info(
      `method: findAllActividades, req:null, response: ${JSON.stringify(
        actividades,
      )}`,
    );
    return {
      message: 'Lista de actividades encontradas',
      ...actividades,
    };
  }

  @Post()
  async create(@Body() createActividadDto: ActividadDto) {
    const data = await this.actividadService.createActividad(
      createActividadDto,
    );
    console.log(createActividadDto);
    return data;
  }

  @Get(':id')
  async getActividadById(@Param('id') id: string) {
    const data = await this.actividadService.getActividad(id);
    this.logger.info(
      `method: getActividadById, req:${id}, response:${JSON.stringify(data)}`,
    );
    return data;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const data = await this.actividadService.deleteActividad(id);
    this.logger.info(
      `method: delete, req:${id}, response:${JSON.stringify(data)}`,
    );
    return data;
  }

  @Put(':id')
  async update(
    @Body() updateActividadDto: UpdateActividadDto,
    @Param('id') id: string,
  ) {
    const data = await this.actividadService.updateActividad(
      id,
      updateActividadDto,
    );
    this.logger.info(
      `method: update, req:${id}, response:${JSON.stringify(data)}`,
    );
    return data;
  }
}
