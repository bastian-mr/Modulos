import { PartialType } from '@nestjs/mapped-types';
import { TipoSucursalDto } from './tipo-sucursal.dto';


export class UpdateTipoSucursalDto extends PartialType(TipoSucursalDto)  {}