import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class ActividadDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  id: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  act_activa: string;
}
