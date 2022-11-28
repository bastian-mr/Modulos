import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('suc_camp_anexo')
export class CampoAnexo {
  @PrimaryGeneratedColumn({ name: 'aux_id' })
  id: number;

  @Column({ length: 50, name: 'anx_nom_campo' })
  nombre: string;

  @Column({ length: 50, name: 'anx_alias' })
  alias: string;

  @Column({ length: 100, name: 'aux_descrip' })
  descripcion: string;
}
