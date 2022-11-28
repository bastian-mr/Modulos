import { PartialType } from '@nestjs/mapped-types';
import { EmpresaDto } from './empresa.dto';


export class UpdateEmpresaDto extends PartialType(EmpresaDto)  {}