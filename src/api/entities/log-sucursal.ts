import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('suc_log_sucursal')
export class LogSucursal {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ length: 4, name: 'cod_suc' })
  cod_suc: string;

  @Column({ name: 'log_fec_ing' })
  log_fec_ing: Date;

  @Column({ length: 50, name: 'usu_cod' })
  usu_cod: string;

  @Column({ length: 4, name: 'scf_codsuc' })
  scf_codsuc: string;

  @Column({ length: 50, name: 'valor_antig' })
  valor_antig: string;

  @Column({ length: 50, name: 'valor_nuevo' })
  valor_nuevo: string;

  @Column({ length: 50, name: 'campo_mod' })
  campo_mod: string;

  // @ManyToOne(() => Usuario, (usuario) => usuario.logSucursal)
  // usuario: Usuario;
}
