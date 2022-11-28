import { Controller, Get, Inject, Param, UseInterceptors } from '@nestjs/common';
import { RegionComunaService } from '../service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { TransformInterceptor } from '../utils';

@UseInterceptors(TransformInterceptor)
@Controller('region-comuna')
export class RegionComunaController {
  constructor(
    private regionService: RegionComunaService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Get('/ciudad/:idCiudad')
  async findByComuna(@Param('idCiudad') idCiudad: string) {
    const comuna = await this.regionService.getComunaById(idCiudad);
    this.logger.info(
      `method: RegionComunaController.findByComuna, req:${idCiudad}, response: ${JSON.stringify(
        comuna,
      )}`,
    );
    return comuna;
  }

  @Get('/region/:idRegion/ciudades')
  async findByRegion(@Param('idRegion') idRegion: string) {
    const region = await this.regionService.getCiudadesByRegion(idRegion);
    this.logger.info(
      `method: RegionComunaController.findByRegion, req:${idRegion}, response: ${JSON.stringify(
        region,
      )}`,
    );
    return region;
  }

  @Get('/regiones')
  async findAll() {
    const region = await this.regionService.getRegiones();
    this.logger.info(
      `method: RegionComunaController.findByRegion, req:null, response: ${JSON.stringify(
        region,
      )}`,
    );
    return region;
  }
}
