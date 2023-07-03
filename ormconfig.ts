import { DataSource } from 'typeorm';
// import { TypeOrmDirectory } from './src/typeorm/index';

export default new DataSource({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5471,
  username: 'test',
  password: 'test',
  database: 'core-banking',
  logging: true,
  entities: [`src/typeorm/entity/**/*{.ts,.js}`],
  migrationsRun: false,
  migrations: [`src/typeorm/migrations/*{.ts,.js}`],
  migrationsTransactionMode: 'all',
});
