import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { ExternalModule } from 'src/external/external.module';

@Module({
  imports: [ExternalModule],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
