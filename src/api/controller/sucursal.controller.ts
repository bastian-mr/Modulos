import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Inject,
} from '@nestjs/common';
import { FilterSucursalDto, SucursalDto } from 'src/api/dto/sucursal.dto';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { UpdateSucursalDto } from '../dto';
import { SucursalService } from '../service/sucursal.service';

@Controller('sucursal')
export class SucursalController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private sucursalService: SucursalService,
  ) {}

  @Get()
  async findAllSucusales() {
    const sucursales = await this.sucursalService.getSucursales();
    this.logger.info(
      `method: findAllSucusales, req:null, response: ${JSON.stringify(
        sucursales,
      )}`,
    );
    return sucursales;
  }

  @Get('filter')
  filter(@Query() filterDto: FilterSucursalDto): string {
    console.log(filterDto);
    return `This action filter a sucursal`;
  }

  @Get(':id')
  async getSucursalById(@Param('id') id: string) {
    const data = await this.sucursalService.getSucursal(id);
    this.logger.info(
      `method: getSucursalById, req:${id}, response:${JSON.stringify(data)}`,
    );
    return data;
  }

  @Post()
  async create(@Body() createSucursalDto: SucursalDto) {
    const data = await this.sucursalService.createSucursal(createSucursalDto);
    console.log(createSucursalDto);
    return { message: 'Sucursal Creada', data };
  }

  @Put(':id')
  async update(
    @Body() updateSucursalDto: UpdateSucursalDto,
    @Param('id') id: string,
  ) {
    const data = await this.sucursalService.updateSucursal(
      id,
      updateSucursalDto,
    );
    this.logger.info(
      `method: update, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Sucursal Modificada', data };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const data = await this.sucursalService.deleteSucursal(id);
    this.logger.info(
      `method: delete, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Sucursal eliminada', data };
  }
}
