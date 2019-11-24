import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "datetime" })
  date: string;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  text: string;

  @Column()
  tileSize: string; 

  @Column("simple-array")
  imageUrls: string[];
}