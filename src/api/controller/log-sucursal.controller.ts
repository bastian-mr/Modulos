import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Inject,
} from '@nestjs/common';

import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

import { LogSucursalService } from '../service';
import { LogSucursalDto, UpdateLogSucursalDto } from '../dto';

@Controller('log-sucursal')
export class LogSucursalController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private logSucursalService: LogSucursalService,
  ) {}

  @Get()
  async findAllLogsucursal() {
    const logSucursal = await this.logSucursalService.getLogsSucursales();
    this.logger.info(
      `method: findAllLogsucursal, req:null, response: ${JSON.stringify(
        logSucursal,
      )}`,
    );
    return logSucursal;
  }

  @Post()
  async create(@Body() createLogSucursalDto: LogSucursalDto) {
    const data = await this.logSucursalService.createLogSucursal(
      createLogSucursalDto,
    );
    console.log(createLogSucursalDto);
    return { message: 'Log Sucursal Creado', data };
  }

  @Get(':id')
  async getLogSucursalById(@Param('id') id: number) {
    const data = await this.logSucursalService.getLogSucursal(id);
    this.logger.info(
      `method: getLogSucursalById, req:${id}, response:${JSON.stringify(data)}`,
    );
    return data;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const data = await this.logSucursalService.deleteLogSucursal(id);
    this.logger.info(
      `method: delete, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Log Sucursal eliminado', data };
  }

  @Put(':id')
  async update(
    @Body() updateLogSucursalDto: UpdateLogSucursalDto,
    @Param('id') id: number,
  ) {
    const data = await this.logSucursalService.updateLogSucursal(
      id,
      updateLogSucursalDto,
    );
    this.logger.info(
      `method: update, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Log Sucursal Modificado', data };
  }
}
