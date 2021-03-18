import { HttpService, Injectable } from '@nestjs/common';
import { ResponseCEP } from './interfaces';

@Injectable()
export class ExternalService {
  constructor(private httpService: HttpService) {}

  async findAddressByCEP(cep: string): Promise<ResponseCEP> {
    const response = await this.httpService
      .get(`${process.env.BRASIL_API_URL}/cep/v1/${cep}`)
      .toPromise();

    return response.data;
  }
}
