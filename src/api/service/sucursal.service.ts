import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { SucursalDto, UpdateSucursalDto } from '../dto';
import { Sucursal } from '../entities';
import { SucursalRepository } from '../repository';

@Injectable()
export class SucursalService {
  constructor(
    private sucursalRepository: SucursalRepository,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async getSucursales(): Promise<Sucursal[]> {
    return this.sucursalRepository.find({});
  }

  async getSucursal(id: string) {
    const sucursal = await this.sucursalRepository.findOneBy({ id });
    if (!sucursal) {
      this.logger.warn(`sucursal con id ${id} no encontrado`);
      throw new HttpException(`sucursal con id ${id} no encontrado`, 400);
    }
    return sucursal;
  }

  async createSucursal(newSucursalc: SucursalDto) {
    const {
      ecv_codemp,
      scf_region,
      tsc_tipsuc,
      scf_descrip,
      scf_ciudad,
      scf_comuna,
      scf_calle,
      scf_fono1,
      scf_fono2,
      scf_fax,
      scf_estado,
      scf_ultact,
      scf_ultfecact,
      scf_ultusuact,
      scf_linea,
      scf_numemp,
      scf_digemp,
      scf_ley889,
      scf_aperlea,
      scf_asigcaja,
      rem_fecpag,
      rem_regcal,
      rem_succal,
      rem_maximp,
      rem_fmaxim,
      rem_sueldo1a,
      rem_fsueldo1a,
      rem_regvou,
      rem_sucvou,
      rem_regcot,
      rem_succot,
      cre_regcan,
      cre_sugcan,
      zon_codigo,
      sil_region,
      sil_codsuc,
      scf_gerzon,
      rem_reajuste_cc,
      scf_usocaja,
      ven_region,
      ven_codsuc,
      caj_regmat,
      caj_sucmat,
      scf_ccampestre,
      scf_autoserv,
      caj_contingencia,
      scf_feccreasuc,
      scf_conppc,
      caj_formdispo,
      scf_autoserv_apl,
      caj_boleauto,
      scf_concre,
      scf_gestion,
      scf_gsukey,
      scf_corta_ps,
      scf_comuna_ps,
      scf_ciudad_ps,
      scf_region_ps,
      scf_fecapesuc,
      scf_prefijo_ps,
      scf_zonal_ps,
      scf_departamento_global_ps,
      tof_tamofi,
      scf_regdepeva,
      scf_sucdepeva,
      scf_fecsii,
      scf_fecsii_mod,
      scf_movil,
      scf_region2,
      suc_compin,
      ban_codban,
      scf_regorden,
      scf_operaciones,
      lop_legadopilar,
      scf_feclegadopilar,
      scf_cod_sii,
      scf_longitud,
      scf_latitud,
      scf_horario,
      scf_centro_dia,
      scf_agente,
      scf_nombre_comercial,
      cmn_comuna,
      scf_campo01,
      scf_campo02,
      scf_campo03,
      scf_campo04,
      scf_campo05,
      scf_campo06,
      scf_campo07,
      scf_campo08,
      scf_campo09,
      scf_nomjefesuc,
      scf_contacto,
      scf_mot_cierre,
      scf_serv_disp,
      scf_rampla,
      scf_totem,
    } = newSucursalc;
    const newSucursal = this.sucursalRepository.create({
      ecv_codemp,
      scf_region,
      tsc_tipsuc,
      scf_descrip,
      scf_ciudad,
      scf_comuna,
      scf_calle,
      scf_fono1,
      scf_fono2,
      scf_fax,
      scf_estado,
      scf_ultact,
      scf_ultfecact,
      scf_ultusuact,
      scf_linea,
      scf_numemp,
      scf_digemp,
      scf_ley889,
      scf_aperlea,
      scf_asigcaja,
      rem_fecpag,
      rem_regcal,
      rem_succal,
      rem_maximp,
      rem_fmaxim,
      rem_sueldo1a,
      rem_fsueldo1a,
      rem_regvou,
      rem_sucvou,
      rem_regcot,
      rem_succot,
      cre_regcan,
      cre_sugcan,
      zon_codigo,
      sil_region,
      sil_codsuc,
      scf_gerzon,
      rem_reajuste_cc,
      scf_usocaja,
      ven_region,
      ven_codsuc,
      caj_regmat,
      caj_sucmat,
      scf_ccampestre,
      scf_autoserv,
      caj_contingencia,
      scf_feccreasuc,
      scf_conppc,
      caj_formdispo,
      scf_autoserv_apl,
      caj_boleauto,
      scf_concre,
      scf_gestion,
      scf_gsukey,
      scf_corta_ps,
      scf_comuna_ps,
      scf_ciudad_ps,
      scf_region_ps,
      scf_fecapesuc,
      scf_prefijo_ps,
      scf_zonal_ps,
      scf_departamento_global_ps,
      tof_tamofi,
      scf_regdepeva,
      scf_sucdepeva,
      scf_fecsii,
      scf_fecsii_mod,
      scf_movil,
      scf_region2,
      suc_compin,
      ban_codban,
      scf_regorden,
      scf_operaciones,
      lop_legadopilar,
      scf_feclegadopilar,
      scf_cod_sii,
      scf_longitud,
      scf_latitud,
      scf_horario,
      scf_centro_dia,
      scf_agente,
      scf_nombre_comercial,
      cmn_comuna,
      scf_campo01,
      scf_campo02,
      scf_campo03,
      scf_campo04,
      scf_campo05,
      scf_campo06,
      scf_campo07,
      scf_campo08,
      scf_campo09,
      scf_nomjefesuc,
      scf_contacto,
      scf_mot_cierre,
      scf_serv_disp,
      scf_rampla,
      scf_totem,
    });
    try {
      await this.sucursalRepository.save(newSucursal);
    } catch (error) {
      this.logger.error(`error al crear campo: ${error}`);
      throw new HttpException(`error al crear campo: ${error}`, 400);
    }
    return newSucursal;
  }

  async deleteSucursal(id: string): Promise<Sucursal> {
    const sucursal = await this.getSucursal(id);
    if (!sucursal) {
      this.logger.warn(`sucursal con id ${id} no encontrado`);
      throw new HttpException(`sucursal con id ${id} no encontrado`, 400);
    }
    return await this.sucursalRepository.remove(sucursal);
  }

  async updateSucursal(id: string, dto: UpdateSucursalDto): Promise<Sucursal> {
    const sucursal = await this.getSucursal(id);

    const editedSucursal = Object.assign(sucursal, dto);
    return await this.sucursalRepository.save(editedSucursal);
  }
}
