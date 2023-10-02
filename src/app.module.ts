import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TaskEntity } from './task/entities/task.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      url: process.env.DB_URL,
      entities: [TaskEntity],
      synchronize: process.env.ENV === 'development',
      migrations: [`${__dirname}/migrations/{.ts,*.js}`],
      migrationsRun: true,
    }),
  ],
})
export class AppModule {}
