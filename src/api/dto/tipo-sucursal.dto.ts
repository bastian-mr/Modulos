import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class TipoSucursalDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  tip_activo: string;

}
