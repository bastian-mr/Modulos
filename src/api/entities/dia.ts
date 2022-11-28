import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('suc_dia')
export class Dia {
  @PrimaryGeneratedColumn({ name: 'dia_cod' })
  id: number;
}
