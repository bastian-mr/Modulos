import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('suc_sucursal')
export class Sucursal {
  @PrimaryColumn({ length: 4, name: 'scf_codsuc' })
  id: string;

  @Column({ length: 2, name: 'ecv_codemp' })
  ecv_codemp: string;

  @Column({ length: 2, name: 'scf_region' })
  scf_region: string;

  @Column({ length: 3, name: 'tsc_tipsuc' })
  tsc_tipsuc: string;

  @Column({ length: 60, name: 'scf_descrip' })
  scf_descrip: string;

  @Column({ length: 2, name: 'scf_ciudad' })
  scf_ciudad: string;

  @Column({ length: 2, name: 'scf_comuna' })
  scf_comuna: string;

  @Column({ length: 60, name: 'scf_calle' })
  scf_calle: string;

  @Column({ length: 30, name: 'scf_fono1' })
  scf_fono1: string;

  @Column({ length: 30, name: 'scf_fono2' })
  scf_fono2: string;

  @Column({ length: 30, name: 'scf_fax' })
  scf_fax: string;

  @Column({ length: 1, name: 'scf_estado' })
  scf_estado: string;

  @Column({ length: 1, name: 'scf_ultact' })
  scf_ultact: string;

  @Column({ name: 'scf_ultfecact' })
  scf_ultfecact: Date;

  @Column({ length: 14, name: 'scf_ultusuact' })
  scf_ultusuact: string;

  @Column({ name: 'scf_linea' })
  scf_linea: number;

  @Column({ name: 'scf_numemp' })
  scf_numemp: number;

  @Column({ length: 1, name: 'scf_digemp' })
  scf_digemp: string;

  @Column({ name: 'scf_ley889' })
  scf_ley889: number; //numeric(14,4)

  @Column({ length: 1, name: 'scf_aperlea' })
  scf_aperlea: string;

  @Column({ name: 'scf_asigcaja' })
  scf_asigcaja: number; //numeric(14,4)

  @Column({ name: 'rem_fecpag' })
  rem_fecpag: Date;

  @Column({ length: 2, name: 'rem_regcal' })
  rem_regcal: string;

  @Column({ length: 4, name: 'rem_succal' })
  rem_succal: string;

  @Column({ name: 'rem_maximp' })
  rem_maximp: number; //numeric(14,4)

  @Column({ name: 'rem_fmaxim' })
  rem_fmaxim: number; //numeric(8,4)

  @Column({ name: 'rem_sueldo1a' })
  rem_sueldo1a: number; //numeric(14,4)

  @Column({ name: 'rem_fsueldo1a' })
  rem_fsueldo1a: number; //numeric(8,4)

  @Column({ length: 2, name: 'rem_regvou' })
  rem_regvou: string;

  @Column({ length: 4, name: 'rem_sucvou' })
  rem_sucvou: string;

  @Column({ length: 2, name: 'rem_regcot' })
  rem_regcot: string;

  @Column({ length: 4, name: 'rem_succot' })
  rem_succot: string;

  @Column({ length: 2, name: 'cre_regcan' })
  cre_regcan: string;

  @Column({ length: 4, name: 'cre_sugcan' })
  cre_sugcan: string;

  @Column({ length: 2, name: 'zon_codigo' })
  zon_codigo: string;

  @Column({ length: 2, name: 'sil_region' })
  sil_region: string;

  @Column({ length: 4, name: 'sil_codsuc' })
  sil_codsuc: string;

  @Column({ name: 'scf_gerzon' })
  scf_gerzon: number;

  @Column({ length: 1, name: 'rem_reajuste_cc' })
  rem_reajuste_cc: string;

  @Column({ length: 1, name: 'scf_usocaja' })
  scf_usocaja: string;

  @Column({ length: 2, name: 'ven_region' })
  ven_region: string;

  @Column({ length: 4, name: 'ven_codsuc' })
  ven_codsuc: string;

  @Column({ length: 2, name: 'caj_regmat' })
  caj_regmat: string;

  @Column({ length: 4, name: 'caj_sucmat' })
  caj_sucmat: string;

  @Column({ length: 1, name: 'scf_ccampestre' })
  scf_ccampestre: string;

  @Column({ length: 1, name: 'scf_autoserv' })
  scf_autoserv: string;

  @Column({ length: 1, name: 'caj_contingencia' })
  caj_contingencia: string;

  @Column({ name: 'scf_feccreasuc' })
  scf_feccreasuc: Date;

  @Column({ length: 2, name: 'scf_conppc' })
  scf_conppc: string;

  @Column({ length: 2, name: 'caj_formdispo' })
  caj_formdispo: string;

  @Column({ length: 1, name: 'scf_autoserv_apl' })
  scf_autoserv_apl: string;

  @Column({ length: 1, name: 'caj_boleauto' })
  caj_boleauto: string;

  @Column({ length: 1, name: 'scf_concre' })
  scf_concre: string;

  @Column({ length: 1, name: 'scf_gestion' })
  scf_gestion: string;

  @Column({ name: 'scf_gsukey' })
  scf_gsukey: number;

  @Column({ length: 10, name: 'scf_corta_ps' })
  scf_corta_ps: string;

  @Column({ length: 30, name: 'scf_comuna_ps' })
  scf_comuna_ps: string;

  @Column({ length: 30, name: 'scf_ciudad_ps' })
  scf_ciudad_ps: string;

  @Column({ length: 6, name: 'scf_region_ps' })
  scf_region_ps: string;

  @Column({ name: 'scf_fecapesuc' })
  scf_fecapesuc: Date;

  @Column({ length: 3, name: 'scf_prefijo_ps' })
  scf_prefijo_ps: string;

  @Column({ name: 'scf_zonal_ps' })
  scf_zonal_ps: number;

  @Column({ length: 10, name: 'scf_departamento_global_ps' })
  scf_departamento_global_ps: string;

  @Column({ length: 2, name: 'tof_tamofi' })
  tof_tamofi: string;

  @Column({ length: 2, name: 'scf_regdepeva' })
  scf_regdepeva: string;

  @Column({ length: 4, name: 'scf_sucdepeva' })
  scf_sucdepeva: string;

  @Column({ name: 'scf_fecsii' })
  scf_fecsii: Date;

  @Column({ name: 'scf_fecsii_mod' })
  scf_fecsii_mod: Date;

  @Column({ length: 1, name: 'scf_movil' })
  scf_movil: string;

  @Column({ length: 2, name: 'scf_region2' })
  scf_region2: string;

  @Column({ length: 60, name: 'suc_compin' })
  suc_compin: string;

  @Column({ length: 30, name: 'ban_codban' })
  ban_codban: string;

  @Column({ name: 'scf_regorden' })
  scf_regorden: number;

  @Column({ length: 1, name: 'scf_operaciones' })
  scf_operaciones: string;

  @Column({ length: 1, name: 'lop_legadopilar' })
  lop_legadopilar: string;

  @Column({ name: 'scf_feclegadopilar' })
  scf_feclegadopilar: Date;

  @Column({ length: 10, name: 'scf_cod_sii' })
  scf_cod_sii: string;

  @Column({ length: 17, name: 'scf_longitud' })
  scf_longitud: string;

  @Column({ length: 17, name: 'scf_latitud' })
  scf_latitud: string;

  @Column({ length: 100, name: 'scf_horario' })
  scf_horario: string;

  @Column({ length: 1, name: 'scf_centro_dia' })
  scf_centro_dia: string;

  @Column({ length: 45, name: 'scf_agente' })
  scf_agente: string;

  @Column({ length: 60, name: 'scf_nombre_comercial' })
  scf_nombre_comercial: string;

  @Column({ length: 3, name: 'cmn_comuna' })
  cmn_comuna: string;

  @Column({ name: 'scf_campo01' })
  scf_campo01: boolean;

  @Column({ name: 'scf_campo02' })
  scf_campo02: boolean;

  @Column({ name: 'scf_campo03' })
  scf_campo03: boolean;

  @Column({ name: 'scf_campo04' })
  scf_campo04: number; //numeric(18,4)

  @Column({ name: 'scf_campo05' })
  scf_campo05: number; //numeric(18,4)

  @Column({ name: 'scf_campo06' })
  scf_campo06: number;

  @Column({ length: 150, name: 'scf_campo07' })
  scf_campo07: string;

  @Column({ length: 150, name: 'scf_campo08' })
  scf_campo08: string;

  @Column({ length: 150, name: 'scf_campo09' })
  scf_campo09: string;

  @Column({ length: 100, name: 'scf_nomjefesuc' })
  scf_nomjefesuc: string;

  @Column({ length: 100, name: 'scf_contacto' })
  scf_contacto: string;

  @Column({ length: 100, name: 'scf_mot_cierre' })
  scf_mot_cierre: string;

  @Column({ length: 100, name: 'scf_serv_disp' })
  scf_serv_disp: string;

  @Column({ length: 150, name: 'scf_rampla' })
  scf_rampla: string;

  @Column({ length: 50, name: 'scf_totem' })
  scf_totem: string;
}
