import { PartialType } from '@nestjs/mapped-types';
import { EstadoAgenciaDto } from './estado-agencia.dto';



export class UpdateEstadoAgenciaDto extends PartialType(EstadoAgenciaDto)  {}