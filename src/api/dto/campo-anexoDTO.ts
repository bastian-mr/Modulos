import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class CampoAnexoDTO {
  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  alias: string;

  @MaxLength(100)
  @IsNotEmpty()
  @IsString()
  descripcion: string;
}
