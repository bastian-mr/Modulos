import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HealthController, dotEnvOptions } from './api/utils';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import * as dotenv from 'dotenv';
import {
  SucursalController,
  CampoAnexoController,
  DashboardController,
  FestivosController,
  HorarioController,
  RegionComunaController,
  EmpresaController,
  TipoSucursalController,
  /*LogSucursalController,
  UsuarioController,*/
} from './api/controller';
import {
  RegionComunaService,
  CampoAnexoService,
  EmpresaService,
  EstadoAgenciaService,
  TipoSucursalService,
  LogSucursalService,
  UsuarioService,
  DiaFeriadoService,
  HorarioLaboralService,
} from './api/service';
import { TokenService, RegionComunaClientService } from './api/client/';
import {
  Actividad,
  CampoAnexo,
  Dia,
  DiaFeriado,
  Empresa,
  EstadoAgencia,
  HorarioLaboral,
  LogSucursal,
  Sucursal,
  TipoSucursal,
  Usuario,
} from './api/entities';
import {
  ActividadRepository,
  CampoRepository,
  EmpresaRepository,
  EstadoAgenciaRepository,
  LogSucursalRepository,
  HorarioLaboralRepository,
  TipoSucursalRepository,
  UsuarioRepository,
  DiaFeriadoRepository,
  SucursalRepository,
} from './api/repository';
import { LoggerConfig, PostgresConfig } from './config';
import { ActividadController } from './api/controller/actividad.controller';
import { EstadoAgenciaController } from './api/controller/estado-agencia.controller';
import { ActividadService } from './api/service/actividad.service';
import { SucursalService } from './api/service/sucursal.service';
import { LogUsuarioModule } from 'src/log_usuario/log_usuario.module';

dotenv.config({ path: dotEnvOptions.path });

const logger: LoggerConfig = new LoggerConfig();
const postgresOptions: PostgresConfig = new PostgresConfig();

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.forRoot(logger.console()),
    TypeOrmModule.forRoot(postgresOptions.getOptions()),
    TypeOrmModule.forFeature([
      Actividad,
      CampoAnexo,
      DiaFeriado,
      Dia,
      Empresa,
      EstadoAgencia,
      HorarioLaboral,
      LogSucursal,
      Sucursal,
      TipoSucursal,
      Usuario,
    ]),
    TerminusModule,
    HttpModule,
  ],
  controllers: [
    SucursalController,
    HealthController,
    CampoAnexoController,
    DashboardController,
    FestivosController,
    HorarioController,
    RegionComunaController,
    ActividadController,
    EmpresaController,
    EstadoAgenciaController,
    TipoSucursalController,
    /*LogSucursalController,
    UsuarioController,*/
  ],
  providers: [
    ActividadRepository,
    DiaFeriadoService,
    DiaFeriadoRepository,
    RegionComunaService,
    TokenService,
    RegionComunaClientService,
    CampoAnexoService,
    CampoRepository,
    ActividadService,
    EmpresaRepository,
    EmpresaService,
    EstadoAgenciaRepository,
    EstadoAgenciaService,
    TipoSucursalRepository,
    TipoSucursalService,
    LogSucursalRepository,
    LogSucursalService,
    UsuarioService,
    UsuarioRepository,
    HorarioLaboralRepository,
    HorarioLaboralService,
    SucursalRepository,
    SucursalService,
  ],
})
export class AppModule {}
