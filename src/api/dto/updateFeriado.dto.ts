import { PartialType } from '@nestjs/mapped-types';
import { FeriadoDto } from './feriado.dto';

export class UpdateFestivoDto extends PartialType(FeriadoDto) {}
