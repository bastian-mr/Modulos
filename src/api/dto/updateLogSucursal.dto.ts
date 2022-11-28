import { PartialType } from '@nestjs/mapped-types';
import { LogSucursalDto } from './log-sucursal.dto';

export class UpdateLogSucursalDto extends PartialType(LogSucursalDto)  {}