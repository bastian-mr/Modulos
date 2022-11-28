import { MaxLength, IsNotEmpty, IsString, IsOptional } from 'class-validator';
export class SucursalDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  ecv_codemp: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  scf_region: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  tsc_tipsuc: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  scf_descrip: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  scf_ciudad: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  scf_comuna: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  scf_calle: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  scf_fono1: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  scf_fono2: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  scf_fax: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_estado: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_ultact: string;

  @IsNotEmpty()
  scf_ultfecact: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(14)
  scf_ultusuact: string;

  @IsNotEmpty()
  scf_linea: number;

  @IsNotEmpty()
  scf_numemp: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_digemp: string;

  @IsNotEmpty()
  scf_ley889: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_aperlea: string;

  @IsNotEmpty()
  scf_asigcaja: number;

  @IsNotEmpty()
  rem_fecpag: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  rem_regcal: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  rem_succal: string;

  @IsNotEmpty()
  rem_maximp: number;

  @IsNotEmpty()
  rem_fmaxim: number;

  @IsNotEmpty()
  rem_sueldo1a: number;

  @IsNotEmpty()
  rem_fsueldo1a: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  rem_regvou: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  rem_sucvou: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  rem_regcot: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  rem_succot: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  cre_regcan: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  cre_sugcan: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  zon_codigo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  sil_region: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  sil_codsuc: string;

  @IsNotEmpty()
  scf_gerzon: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  rem_reajuste_cc: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_usocaja: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  ven_region: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  ven_codsuc: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  caj_regmat: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  caj_sucmat: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_ccampestre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_autoserv: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  caj_contingencia: string;

  @IsNotEmpty()
  scf_feccreasuc: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  scf_conppc: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  caj_formdispo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_autoserv_apl: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  caj_boleauto: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_concre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_gestion: string;

  @IsNotEmpty()
  scf_gsukey: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  scf_corta_ps: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  scf_comuna_ps: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  scf_ciudad_ps: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(6)
  scf_region_ps: string;

  @IsNotEmpty()
  scf_fecapesuc: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  scf_prefijo_ps: string;

  @IsNotEmpty()
  scf_zonal_ps: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  scf_departamento_global_ps: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  tof_tamofi: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  scf_regdepeva: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  scf_sucdepeva: string;

  @IsNotEmpty()
  scf_fecsii: Date;

  @IsNotEmpty()
  scf_fecsii_mod: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_movil: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  scf_region2: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  suc_compin: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  ban_codban: string;

  @IsNotEmpty()
  scf_regorden: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_operaciones: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  lop_legadopilar: string;

  @IsNotEmpty()
  scf_feclegadopilar: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  scf_cod_sii: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(17)
  scf_longitud: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(17)
  scf_latitud: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  scf_horario: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1)
  scf_centro_dia: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  scf_agente: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  scf_nombre_comercial: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  cmn_comuna: string;

  @IsNotEmpty()
  scf_campo01: boolean;

  @IsNotEmpty()
  scf_campo02: boolean;

  @IsNotEmpty()
  scf_campo03: boolean;

  @IsNotEmpty()
  scf_campo04: number;

  @IsNotEmpty()
  scf_campo05: number;

  @IsNotEmpty()
  scf_campo06: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  scf_campo07: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  scf_campo08: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  scf_campo09: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  scf_nomjefesuc: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  scf_contacto: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  scf_mot_cierre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  scf_serv_disp: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  scf_rampla: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  scf_totem: string;
}

export class FilterSucursalDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  param1: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  param2: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  param3: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  param4: string;
}
