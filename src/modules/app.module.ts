import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { StoresModule } from './stores/stores.module';
import { getConnectionOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    CustomersModule,
    StoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
