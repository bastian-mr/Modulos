import * as Joi from 'joi';
import {
  Actividad,
  Dia,
  DiaFeriado,
  Empresa,
  EstadoAgencia,
  HorarioLaboral,
  LogSucursal,
  Sucursal,
  TipoSucursal,
  Usuario,
} from 'src/api/entities';
import { CampoAnexo } from 'src/api/entities/campoAnexo';

export class PostgresConfig {
  private readonly options;
  private readonly envConfig: IEnvConfigInterface;

  constructor() {
    this.envConfig = this.validateInput(process.env);
    this.options = {
      type: 'postgres',
      port: +process.env.DATABSE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME,
      synchronize: false,
      entities: [
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
      ],
      keepConnectionAlive: true,
      host: process.env.DATABASE_HOST,
    };
  }

  public getOptions() {
    return this.options;
  }

  private validateInput(envConfig: IEnvConfigInterface): IEnvConfigInterface {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'test')
        .default('development'),
      PORT: Joi.number().required(),
    }).unknown(true);

    const { error, value: validatedEnvConfig } =
      envVarsSchema.validate(envConfig);
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}

export default interface IEnvConfigInterface {
  [key: string]: string;
}
