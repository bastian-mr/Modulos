import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CampoAnexoService } from '../service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { CampoAnexoDTO } from '../dto/campo-anexoDTO';
import { TransformInterceptor } from '../utils';

@UseInterceptors(TransformInterceptor)
@Controller('campo-anexo')
export class CampoAnexoController {
  constructor(
    private campoAnexoService: CampoAnexoService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Get()
  async findAllCampo() {
    const campos = await this.campoAnexoService.getCampos();
    this.logger.info(
      `method: findAllCampo, req:null, response: ${JSON.stringify(campos)}`,
    );
    return campos;
  }

  @Get(':id')
  async getCampoById(@Param('id', ParseIntPipe) id: number) {
    const campo = await this.campoAnexoService.getCampo(id);
    this.logger.info(
      `method: getCampoById, req:${id}, response:${JSON.stringify(campo)}`,
    );
    return campo;
  }

  @Post()
  async createCampo(@Body() newCampo: CampoAnexoDTO) {
    this.logger.info(`method: createCampo, req: ${JSON.stringify(newCampo)}`);
    const campo = await this.campoAnexoService.createCampo(newCampo);
    this.logger.info(`method: createCampo, res: ${JSON.stringify(campo)}`);
    return campo;
  }
}
