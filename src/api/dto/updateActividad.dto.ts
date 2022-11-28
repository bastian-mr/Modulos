import { PartialType } from '@nestjs/mapped-types';
import { ActividadDto } from './actividad.dto';

export class UpdateActividadDto extends PartialType(ActividadDto)  {}