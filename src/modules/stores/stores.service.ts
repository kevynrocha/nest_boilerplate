import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  constructor(private httpService: HttpService) {}

  create(createStoreDto: CreateStoreDto) {
    return 'This action adds a new store';
  }

  async findAll(): Promise<any> {
    const response = await this.httpService
      .get('https://brasilapi.com.br/api/cep/v1/79084212')
      .toPromise();

    return response.data;
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
