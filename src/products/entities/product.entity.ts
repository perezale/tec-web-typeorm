import { Feature } from "src/features/entities/feature.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => Feature)
  @JoinColumn({ name: 'feature_id' })
  feature: Feature;
}
