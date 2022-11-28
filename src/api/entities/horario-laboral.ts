import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('suc_hor_laboral')
export class HorarioLaboral {
  @PrimaryGeneratedColumn({ name: 'hor_id' })
  id: number;

  @Column({ length: 4, name: 'hor_codsuc' })
  hor_codsuc: string;

  @Column({ name: 'hor_dia_cod' })
  hor_dia_cod: number;

  @Column({ length: 5, name: 'hor_apertura' })
  hor_apertura: string;

  @Column({ length: 5, name: 'hor_apercierre' })
  hor_apercierre: string;

  @Column({ name: 'hor_personalizado' })
  hor_personalizado: boolean;
}
