import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('suc_estado_age')
export class EstadoAgencia {
  @PrimaryColumn({ name: 'est_id' })
  id: string;

  @Column({ length: 50, name: 'est_descrip' })
  descripcion: string;

  @Column({ length: 1, name: 'est_activo' })
  est_activo: string;
}
