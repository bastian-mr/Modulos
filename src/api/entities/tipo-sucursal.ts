import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('suc_tipo_suc')
export class TipoSucursal {
  @PrimaryColumn({ name: 'tip_suc', length: 3 })
  id: string;

  @Column({ length: 50, name: 'tip_descrip' })
  descripcion: string;

  @Column({ length: 1, name: 'tip_activo' })
  tip_activo: string;
}
