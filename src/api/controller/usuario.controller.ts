import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Inject,
  Query,
  UseInterceptors,
} from '@nestjs/common';

import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { UsuarioService } from '../service';
import { FilterSucursalDto, UpdateUsuarioDto, UsuarioDto } from '../dto';
import { TransformInterceptor } from '../utils';

@UseInterceptors(TransformInterceptor)
@Controller('usuario')
export class UsuarioController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private usuarioService: UsuarioService,
  ) {}

  @Get()
  async findAllUsuarios() {
    const usuarios = await this.usuarioService.getUsuarios();
    this.logger.info(
      `method: findAllUsuarios, req:null, response: ${JSON.stringify(
        usuarios,
      )}`,
    );
    return usuarios;
  }

  @Post()
  async create(@Body() createUsuarioDto: UsuarioDto) {
    const data = await this.usuarioService.createUsuario(createUsuarioDto);
    console.log(createUsuarioDto);
    return { message: 'Usuario Creado', data };
  }
  @Get(':id')
  async getUsuarioById(@Param('id') id: string) {
    const data = await this.usuarioService.getUsuario(id);
    this.logger.info(
      `method: getUsuarioById, req:${id}, response:${JSON.stringify(data)}`,
    );
    return data;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const data = await this.usuarioService.deleteUsuario(id);
    this.logger.info(
      `method: delete, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Usuario eliminada', data };
  }

  @Put(':id')
  async update(
    @Body() updateUsuarioDto: UpdateUsuarioDto,
    @Param('id') id: string,
  ) {
    const data = await this.usuarioService.updateUsuario(id, updateUsuarioDto);
    this.logger.info(
      `method: update, req:${id}, response:${JSON.stringify(data)}`,
    );
    return { message: 'Usuario Modificada', data };
  }

  @Get('filter')
  filter(@Query() filterDto: FilterSucursalDto): string {
    console.log(filterDto);
    return `This action filter a actividades`;
  }
}
