import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class EmpresaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  descripcion: string;
}
