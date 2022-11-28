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
import { EstadoAgenciaDto, UpdateEstadoAgenciaDto } from '../dto';
import { EstadoAgenciaService } from '../service';
import { TransformInterceptor } from '../utils';

@UseInterceptors(TransformInterceptor)
@Controller('estado-agencia')
export class EstadoAgenciaController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private estadoAgenciaService: EstadoAgenciaService,
  ) {}

  @Get()
  async findAllEstadosAgencias() {
    const estadosAgencias =
      await this.estadoAgenciaService.getEstadosAgencias();
    this.logger.info(
      `method: findAllActividades, req:null, response: ${JSON.stringify(
        estadosAgencias,
      )}`,
    );
    return estadosAgencias;
  }

  @Post()
  async create(@Body() createActividadDto: EstadoAgenciaDto) {
    const data = await this.estadoAgenciaService.createEstadoAgencia(
      createActividadDto,
    );
    console.log(createActividadDto);
    return { message: 'Estado Agencia Creada', data };
  }

  @Get(':id')
  async getActividadById(@Param('id') id: string) {
    const data = await this.estadoAgenciaService.getEstadoAgencia(id);
    this.logger.info(
      `method: getActividadById, req:${id}, response:${JSON.stringify(data)}`,
    );
    return data;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const data = await this.estadoAgenciaService.deleteEstadoAgencia(id);
    this.logger.info(
      `method: delete, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Estado Agencia eliminada', data };
  }

  @Put(':id')
  async update(
    @Body() updateEstadoAgenciaDto: UpdateEstadoAgenciaDto,
    @Param('id') id: string,
  ) {
    const data = await this.estadoAgenciaService.updateEstadoAgencia(
      id,
      updateEstadoAgenciaDto,
    );
    this.logger.info(
      `method: update, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Estado Agencia Modificada', data };
  }

  /* @Get('filter')
  filter(@Query() filterDto: FilterSucursalDto): string {
    console.log(filterDto);
    return `This action filter a actividades`;
  }*/
}
