import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class UsuarioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  apellido1: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  apellido2: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  usu_act: string;

  @IsNotEmpty()
  usu_fec_ing: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  usu_clave: string;
}
