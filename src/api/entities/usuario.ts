import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { LogSucursal } from './log-sucursal';

@Entity('suc_usuario')
export class Usuario {
  @PrimaryColumn({ name: 'usu_cod' })
  id: string;

  @Column({ length: 50, name: 'usu_nom' })
  nombre: string;

  @Column({ length: 50, name: 'usu_ape_pat' })
  apellido1: string;

  @Column({ length: 50, name: 'usu_ape_mat' })
  apellido2: string;

  @Column({ length: 1, name: 'usu_act' })
  usu_act: string;

  @Column({ name: 'usu_fec_ing' })
  usu_fec_ing: Date;

  @Column({ length: 50, name: 'usu_clave' })
  usu_clave: string;

  // @OneToMany(() => LogSucursal, (logSucursal) => logSucursal.usuario)
  // logSucursal: LogSucursal[];
}
