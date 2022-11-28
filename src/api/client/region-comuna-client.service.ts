import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { TokenService } from './token.service';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class RegionComunaClientService {
  constructor(
    private tokenService: TokenService,
    private readonly httpService: HttpService,
  ) {}

  async getComunaByIdClient(idRegion: string): Promise<any> {
    const url =
      process.env.API_URL_CCLA +
      '/catalogos/v1/regiones/ciudades/' +
      idRegion +
      '/comunas';

    return this.httpTemplate(url);
  }

  async getRegionByIdClient(idRegion: string): Promise<any> {
    const url =
      process.env.API_URL_CCLA +
      '/catalogos/v1/regiones/' +
      idRegion +
      '/ciudades';

    return this.httpTemplate(url);
  }

  async getRegionesClient(): Promise<any> {
    const url = process.env.API_URL_CCLA + '/catalogos/v1/regiones';

    return this.httpTemplate(url);
  }

  async httpTemplate(url: string) {
    const { access_token } = await this.tokenService.getTokenCCLA();

    const headersRequest = {
      Authorization: 'Bearer ' + access_token,
    };

    try {
      const response = this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .pipe(map((response) => response));
      return await lastValueFrom(response);
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, 404);
    }
  }
}
