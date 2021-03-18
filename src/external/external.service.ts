import { HttpService, Injectable } from '@nestjs/common';
import { ResponseCEP } from './interfaces';

@Injectable()
export class ExternalService {
  constructor(private httpService: HttpService) {}

  async findAddressByCEP(cep: string): Promise<ResponseCEP> {
    const response = await this.httpService
      .get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
      .toPromise();

    return response.data;
  }
}
