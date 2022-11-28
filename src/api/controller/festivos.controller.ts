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

import { DiaFeriadoService } from '../service';
import { FeriadoDto, UpdateFestivoDto } from '../dto';
import { TransformInterceptor } from '../utils';

@UseInterceptors(TransformInterceptor)
@Controller('festivo')
export class FestivosController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private diaFeriadoService: DiaFeriadoService,
  ) {}

  @Get()
  async findAllFeriados() {
    const feriados = await this.diaFeriadoService.getFeriados();
    this.logger.info(
      `method: findAllFeriados, req:null, response: ${JSON.stringify(
        feriados,
      )}`,
    );
    return feriados;
  }

  @Post()
  async create(@Body() createFeriadoDto: FeriadoDto) {
    const data = await this.diaFeriadoService.createFeriados(createFeriadoDto);
    console.log(createFeriadoDto);
    return { message: 'Feriado Creado', data };
  }

  @Get(':id')
  async getFeriadoById(@Param('id') id: number) {
    const data = await this.diaFeriadoService.getFeriado(id);
    this.logger.info(
      `method: getFeriadoById, req:${id}, response:${JSON.stringify(data)}`,
    );
    return data;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const data = await this.diaFeriadoService.deleteFeriados(id);
    this.logger.info(
      `method: delete, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Feriado eliminado', data };
  }

  @Put(':id')
  async update(
    @Body() updateFestivoDto: UpdateFestivoDto,
    @Param('id') id: number,
  ) {
    const data = await this.diaFeriadoService.updateFeriados(
      id,
      updateFestivoDto,
    );
    this.logger.info(
      `method: update, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Festivo Modificado', data };
  }
}
