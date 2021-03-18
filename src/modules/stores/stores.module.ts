import { HttpModule, Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';

@Module({
  imports: [HttpModule],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
