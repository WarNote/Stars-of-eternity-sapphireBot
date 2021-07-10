import 'reflect-metadata';

import dotenv from 'dotenv';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import type { ConnectionOptions } from 'typeorm';

import * as entities from './src/lib/typeorm/models';

dotenv.config();
export const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'starsOfEternity',
  synchronize: false,
  logging: 'all',
  namingStrategy: new SnakeNamingStrategy(),
  entities: Object.values(entities),
  migrations: [
    'src/lib/typeorm/migrations/**/*.ts',
  ],
  subscribers: [
    'src/lib/typeorm/subscriber/**/*.ts',
  ],
  cli: {
    migrationsDir: 'src/lib/typeorm/migrations/generated',
  },
};
export default config;