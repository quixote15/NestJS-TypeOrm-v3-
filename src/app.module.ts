import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmDirectory } from './typeorm';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
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

const TypeOrmConfig = TypeOrmModule.forRoot(getOrmConfig())

@Module({
  imports: [TypeOrmConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
