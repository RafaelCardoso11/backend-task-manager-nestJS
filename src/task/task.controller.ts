import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CompleteMultipleTasksDto } from './dto/complete-multiple-tasks';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  async findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }

  @Patch('complete')
  async updateCompleteMultipleTask(@Body() tasks: CompleteMultipleTasksDto) {
    return this.taskService.updateCompleteMultipleTask(tasks);
  }
}
