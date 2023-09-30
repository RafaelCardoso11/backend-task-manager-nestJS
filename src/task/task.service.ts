import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { TaskEntity } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);

    await this.taskRepository.save(task);

    return task;
  }

  async findAll() {
    const tasks = await this.taskRepository.find();
    return {
      data: tasks,
      totalCounts: tasks.length,
    };
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOne({ where: { id } });

    if (!task) {
      throw new BadRequestException('Task not found');
    }
    return {
      data: task,
    };
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const { affected } = await this.taskRepository.update(id, updateTaskDto);

    if (!!!affected) {
      throw new NotFoundException(`Registration for ${id} not found`);
    }

    return {
      data: updateTaskDto,
      message: 'Task update successfully',
    };
  }

  async remove(id: number) {
    const { affected } = await this.taskRepository.delete(id);

    if (!!!affected) {
      throw new NotFoundException(`Registration for ${id} not found`);
    }

    return {
      message: 'Task deleted successfully',
    };
  }
}
