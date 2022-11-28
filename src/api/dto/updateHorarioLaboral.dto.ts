import { PartialType } from '@nestjs/mapped-types';
import { HorarioLaboralDto } from './horario-laboral.dto';

export class UpdateHorarioLaboralDto extends PartialType(HorarioLaboralDto) {}
