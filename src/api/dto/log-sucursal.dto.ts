import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class LogSucursalDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  cod_suc: string;

  @IsNotEmpty()
  log_fec_ing: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  usu_cod: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  scf_codsuc: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  valor_antig: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  valor_nuevo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  campo_mod: string;
}
