import { Controller, Get, Param } from '@nestjs/common';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Get(':cep')
  findAddressByCEP(@Param('cep') cep: string) {
    return this.storesService.findAddressByCEP(cep);
  }
}
