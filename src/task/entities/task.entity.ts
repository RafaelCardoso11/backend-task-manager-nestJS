import { PriorityEnum } from 'src/enums/priority.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'task',
})
export class TaskEntity {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id: number;

  @Column({
    length: 127,
  })
  title: string;

  @Column({
    length: 300,
    nullable: true,
  })
  description: string;

  @Column({
    enum: PriorityEnum,
  })
  priority: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  dueDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
