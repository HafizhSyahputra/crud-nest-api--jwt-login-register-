import { Column, Entity, IntegerType, PrimaryGeneratedColumn } from 'typeorm';
@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  price: string;
}
