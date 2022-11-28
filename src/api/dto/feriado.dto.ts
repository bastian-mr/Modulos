import {
  MaxLength,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class FeriadoDto {
  @IsNotEmpty()
  @IsDateString()
  dfe_fecha;

  @IsString()
  @MaxLength(4)
  @IsNotEmpty()
  dfe_a_o;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  dfe_descrip;

  @IsNumber()
  @IsNotEmpty()
  dfe_dia_cod;
}
