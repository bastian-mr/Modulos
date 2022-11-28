import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { EmpresaDto, UpdateEmpresaDto } from '../dto';
import { Empresa } from '../entities';
import { EmpresaRepository } from '../repository';

@Injectable()
export class EmpresaService {
  constructor(
    private empresaRepository: EmpresaRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getEmpresas(): Promise<Empresa[]> {
    return this.empresaRepository.find({});
  }

  async createEmpresa(newEmpresac: EmpresaDto) {
    const { descripcion } = newEmpresac;
    const newEmpresa = this.empresaRepository.create({
      descripcion,
    });
    try {
      await this.empresaRepository.save(newEmpresa);
    } catch (error) {
      this.logger.error(`error al crear campo: ${error}`);
      throw new HttpException(`error al crear campo: ${error}`, 400);
    }
    return newEmpresa;
  }

  async getEmpresa(id: string) {
    const empresa = await this.empresaRepository.findOneBy({ id });
    if (!empresa) {
      this.logger.warn(`Empresa con id ${id} no encontrado`);
      throw new HttpException(`Empresa con id ${id} no encontrado`, 204);
    }

    return { message: 'Empresa encontrada con exito', ...empresa };
  }
  async updateEmpresa(id: string, dto: UpdateEmpresaDto): Promise<Empresa> {
    const empresa = await this.getEmpresa(id);

    const editedEmpresa = Object.assign(empresa, dto);
    return await this.empresaRepository.save(editedEmpresa);
  }

  async deleteEmpresa(id: string): Promise<any> {
    const empresa = await this.getEmpresa(id);
    console.log(empresa);
    if (!empresa) {
      this.logger.warn(`Empresa con id ${id} no encontrado`);
      throw new HttpException(`Empresa con id ${id} no encontrado`, 400);
    }
    return await this.empresaRepository.remove(empresa);
  }
}
