import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import { minDateISO } from 'src/decorators/minDateISO.decorator';
import { PriorityEnum } from 'src/enums/priority.enum';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsEnum(PriorityEnum)
  priority: string;

  @minDateISO(new Date().toISOString())
  @IsDateString()
  dueDate: string;
}
