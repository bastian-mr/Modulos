import { Injectable } from '@nestjs/common';
import { RegionComunaClientService } from '../client/region-comuna-client.service';
@Injectable()
export class RegionComunaService {
  constructor(
    private readonly regionComunaClientService: RegionComunaClientService,
  ) {}

  async getComunaById(idComuna: string): Promise<any> {
    const comunaResponse =
      await this.regionComunaClientService.getComunaByIdClient(idComuna);

    return {
      comuna_id: idComuna,
      comuna: comunaResponse.data.comunas[0].descripcion,
    };
  }

  async getCiudadesByRegion(idRegion: string): Promise<any> {
    const regionResponse =
      await this.regionComunaClientService.getRegionByIdClient(idRegion);

    return {
      region_id: idRegion,
      ciudades: regionResponse.data.ciudades,
    };
  }

  async getRegiones(): Promise<any> {
    const regionResponse =
      await this.regionComunaClientService.getRegionesClient();

    return regionResponse.data;
  }
}
