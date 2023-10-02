import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { minDateISO } from 'src/decorators/minDateISO.decorator';
import { PriorityEnum } from 'src/enums/priority.enum';

export class CreateTaskDto {
  @MaxLength(127)
  @IsString()
  title: string;

  @IsOptional()
  @MaxLength(300)
  @IsString()
  description: string;

  @IsEnum(PriorityEnum)
  priority: string;

  @minDateISO(new Date().toISOString())
  @IsDateString()
  dueDate: string;
}
