import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('suc_dias_feriados')
export class DiaFeriado {
  @PrimaryGeneratedColumn({ name: 'dfe_id' })
  id: number;

  @Column({ name: 'dfe_fecha' })
  dfe_fecha: Date;

  @Column({ length: 4, name: 'dfe_a_o' })
  dfe_a_o: string;

  @Column({ length: 100, name: 'dfe_descrip' })
  dfe_descrip: string;

  @Column({ name: 'dfe_dia_cod' })
  dfe_dia_cod: number;
}
