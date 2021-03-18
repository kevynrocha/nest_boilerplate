import { HttpModule, Module } from '@nestjs/common';
import { ExternalService } from './external.service';

@Module({
  imports: [HttpModule],
  providers: [ExternalService],
  exports: [ExternalModule, ExternalService],
})
export class ExternalModule {}
