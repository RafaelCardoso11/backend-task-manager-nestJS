import { ArrayMinSize, IsArray } from 'class-validator';

export class CompleteMultipleTasksDto {
  @IsArray()
  @ArrayMinSize(1)
  taskIds: Array<number>;
}
