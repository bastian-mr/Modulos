import { PartialType } from '@nestjs/mapped-types';
import { SucursalDto } from './sucursal.dto';




export class UpdateSucursalDto extends PartialType(SucursalDto)  {}