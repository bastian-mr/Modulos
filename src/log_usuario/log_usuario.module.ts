/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HealthController, dotEnvOptions } from 'src/api/utils';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { UsuarioController, LogSucursalController } from 'src/api/controller';
import { LogSucursalService, UsuarioService } from 'src/api/service';
import { LogSucursalRepository, UsuarioRepository } from 'src/api/repository';
import { LogSucursal, Usuario } from 'src/api/entities';
import { LoggerConfig, PostgresConfig } from 'src/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: dotEnvOptions.path });

const logger: LoggerConfig = new LoggerConfig();
const postgresOptions: PostgresConfig = new PostgresConfig();


@Module({
    imports: [
        ConfigModule.forRoot(),
        WinstonModule.forRoot(logger.console()),
        TypeOrmModule.forRoot(postgresOptions.getOptions()),
        TypeOrmModule.forFeature([
          
          LogSucursal,
          Usuario,
        ]),
        TerminusModule,
        HttpModule,
      ],
  controllers: [HealthController, UsuarioController, LogSucursalController],
  providers: [
    LogSucursalRepository,
    LogSucursalService,
    UsuarioService,
    UsuarioRepository,
  ],
  
})
export class LogUsuarioModule {}
