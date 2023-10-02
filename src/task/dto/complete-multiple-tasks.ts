import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNumber,
  ValidateNested,
} from 'class-validator';

class TaskCompletion {
  @IsNumber()
  taskId: number;

  @IsBoolean()
  completed: boolean;
}

export class CompleteMultipleTasksDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TaskCompletion)
  taskCompletions: TaskCompletion[];
}
