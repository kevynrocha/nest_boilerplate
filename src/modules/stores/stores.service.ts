import { Injectable } from '@nestjs/common';
import { ExternalService } from 'src/external/external.service';

@Injectable()
export class StoresService {
  constructor(private externalService: ExternalService) {}

  findAddressByCEP(cep: string) {
    return this.externalService.findAddressByCEP(cep);
  }
}
