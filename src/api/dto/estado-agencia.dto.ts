import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class EstadoAgenciaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  est_activo: string;
}
