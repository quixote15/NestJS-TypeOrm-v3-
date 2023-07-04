import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmDirectory } from './typeorm';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MyCustomRepository } from './typeorm/repository/PixRepository';
import { TypeOrmPixTransferCashOut } from './typeorm/entity/PixTransferCashOut';
import { DataSource } from 'typeorm';
const getOrmConfig = (): TypeOrmModuleOptions => ({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5471,
  username: 'test',
  password: 'test',
  database: 'core-banking',
  logging: true,
  entities: [`${TypeOrmDirectory}/entity/**/*{.ts,.js}`],
  migrationsRun: false,
  migrations: [`${TypeOrmDirectory}/migration/**/*{.ts,.js}`],
  migrationsTransactionMode: 'all',
});

import { addTransactionalDataSource } from 'typeorm-transactional';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        return getOrmConfig();
      },
      async dataSourceFactory(options) {
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: MyCustomRepository,
      useFactory: (datasource: DataSource) => {
        return new MyCustomRepository(
          TypeOrmPixTransferCashOut,
          datasource.manager,
        );
      },
      inject: [DataSource],
    },
  ],
})
export class AppModule {}
