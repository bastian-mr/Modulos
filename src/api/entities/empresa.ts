import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('suc_empresa')
export class Empresa {
  @PrimaryColumn({ name: 'emp_cod' })
  id: string;

  @Column({ length: 50, name: 'emp_descrip' })
  descripcion: string;
}
