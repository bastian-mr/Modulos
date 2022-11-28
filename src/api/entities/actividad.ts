import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('suc_actividad')
export class Actividad {
  @PrimaryColumn({ name: 'act_cod' })
  id: string;

  @Column({ length: 100, name: 'act_descrip' })
  descripcion: string;

  @Column({ length: 1, name: 'act_activa' })
  act_activa: string;
}
