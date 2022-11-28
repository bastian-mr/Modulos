import {
  MaxLength,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class HorarioLaboralDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(4)
  hor_codsuc: string;

  @IsNotEmpty()
  @IsNumber()
  hor_dia_cod: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(5)
  hor_apertura: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(5)
  hor_apercierre: string;

  @IsNotEmpty()
  @IsBoolean()
  hor_personalizado: boolean;
}
