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
import { EmpresaDto, UpdateEmpresaDto } from '../dto';
import { EmpresaService } from '../service';

@Controller('empresa')
export class EmpresaController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private empresaService: EmpresaService,
  ) {}

  @Get()
  async findAllEmpresas() {
    const empresas = await this.empresaService.getEmpresas();
    this.logger.info(
      `method: findAllEmpresas, req:null, response: ${JSON.stringify(
        empresas,
      )}`,
    );
    return empresas;
  }

  @Post()
  async create(@Body() createEmpresaDto: EmpresaDto) {
    const data = await this.empresaService.createEmpresa(createEmpresaDto);
    console.log(createEmpresaDto);
    return { message: 'Empresa creada Creada', data };
  }

  @Get(':id')
  async getEmpresaById(@Param('id') id: string) {
    const data = await this.empresaService.getEmpresa(id);
    this.logger.info(
      `method: getEmpresaById, req:${id}, response:${JSON.stringify(data)}`,
    );
    return data;
  }

  @Put(':id')
  async update(
    @Body() updateEmpresaDto: UpdateEmpresaDto,
    @Param('id') id: string,
  ) {
    const data = await this.empresaService.updateEmpresa(id, updateEmpresaDto);
    this.logger.info(
      `method: update, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Empresa Modificada', data };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const data = await this.empresaService.deleteEmpresa(id);
    this.logger.info(
      `method: delete, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Empresa eliminada', data };
  }

  /* @Get('filter')
  filter(@Query() filterDto: FilterSucursalDto): string {
    console.log(filterDto);
    return `This action filter a actividades`;
  }*/
}
