import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class TokenService {
  constructor(private readonly httpService: HttpService) {}

  async getTokenCCLA(): Promise<any> {
    const headersRequest = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-api-key': process.env.API_USER,
      Authorization: this.getBasicAuth(),
    };

    const bodyRequest = new URLSearchParams();
    bodyRequest.append('grant_type', process.env.API_GRANT_BODY);
    bodyRequest.append('username', process.env.API_USER_BODY);
    bodyRequest.append('password', process.env.API_PASS_BODY);

    try {
      const response = this.httpService
        .post(process.env.API_URL_CCLA + '/oauth2/token', bodyRequest, {
          headers: headersRequest,
        })
        .pipe(map((response) => response.data));
      return await lastValueFrom(response);
    } catch (error) {
      console.log(error);
    }
  }

  getBasicAuth() {
    return Buffer.from(
      process.env.API_USER + ':' + process.env.API_PASS,
    ).toString('base64');
  }
}
