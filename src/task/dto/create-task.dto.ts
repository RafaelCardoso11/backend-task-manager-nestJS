import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import { PriorityEnum } from 'src/enums/priority.enum';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsEnum(PriorityEnum)
  priority: string;

  @IsDateString()
  dueDate: string;
}
