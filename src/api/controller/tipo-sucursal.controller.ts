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
import { TipoSucursalDto, UpdateTipoSucursalDto } from '../dto';
import { TipoSucursalService } from '../service/tipo-sucursal.service';
import { TransformInterceptor } from '../utils';

@UseInterceptors(TransformInterceptor)
@Controller('tipo-sucursal')
export class TipoSucursalController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private tipoSucursalService: TipoSucursalService,
  ) {}

  @Get()
  async findAllTiposSucursales() {
    const tipoSucursales = await this.tipoSucursalService.getTiposSucursales();
    this.logger.info(
      `method: findAllTiposSucursales, req:null, response: ${JSON.stringify(
        tipoSucursales,
      )}`,
    );
    return tipoSucursales;
  }

  @Post()
  async create(@Body() createTipoSucursalDto: TipoSucursalDto) {
    const data = await this.tipoSucursalService.createTipoSucursal(
      createTipoSucursalDto,
    );
    console.log(createTipoSucursalDto);
    return { message: 'Tipo Sucursal Creada', data };
  }

  @Get(':id')
  async getTipoSucursalById(@Param('id') id: string) {
    const data = await this.tipoSucursalService.getTipoSucursal(id);
    this.logger.info(
      `method: getTipoSucursalById, req:${id}, response:${JSON.stringify(
        data,
      )}`,
    );
    return data;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const data = await this.tipoSucursalService.deleteTipoSucursal(id);
    this.logger.info(
      `method: delete, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Tipo Sucursal eliminada', data };
  }

  @Put(':id')
  async update(
    @Body() updateTipoSucursalDto: UpdateTipoSucursalDto,
    @Param('id') id: string,
  ) {
    const data = await this.tipoSucursalService.updateTipoSucursal(
      id,
      updateTipoSucursalDto,
    );
    this.logger.info(
      `method: update, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Tipo Sucursal Modificada', data };
  }
}
