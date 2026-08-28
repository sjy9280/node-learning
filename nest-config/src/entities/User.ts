import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn({
    type:'integer'
  })
  id:number;

  @Column({
    type:'varchar',
    length:255
  })
  name:string;
  
  @Column({
    type:'integer'
  })
  age:number;
    
  @Column({
    type:'varchar',
    length:255
  })
  email:string;
}