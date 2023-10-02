import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { In, Repository } from 'typeorm';
import { TaskEntity } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskNotFoundException } from 'src/exceptions/taskNotFound.exception';
import { NoPendingTasksFoundException } from 'src/exceptions/noPendingTasksFound';
import { CompleteMultipleTasksDto } from './dto/complete-multiple-tasks';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);

    await this.taskRepository.save(task);

    return {
      message: 'Task cadastrada com sucesso!',
      data: task,
    };
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
      throw new TaskNotFoundException();
    }
    return {
      data: task,
    };
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const { affected } = await this.taskRepository.update(id, updateTaskDto);

    if (!!!affected) {
      throw new TaskNotFoundException();
    }

    return {
      data: updateTaskDto,
      message: 'Task editada com sucesso!',
    };
  }

  async remove(id: number) {
    const { affected } = await this.taskRepository.delete(id);

    if (!!!affected) {
      throw new TaskNotFoundException();
    }

    return {
      message: 'Task deletada com sucesso!',
    };
  }

  async completeMultipleTask({ taskCompletions }: CompleteMultipleTasksDto) {
    const taskIdsToUpdate = taskCompletions.map(({ taskId }) => taskId);

    for (const { taskId, completed } of taskCompletions) {
      await this.updateTaskCompletionStatus(taskId, completed);
    }

    const updatedTasks = await this.findByIds(taskIdsToUpdate);

    return {
      data: updatedTasks,
      message: 'Tasks atualizadas com sucesso!',
    };
  }

  async findByIds(ids: number[]) {
    const tasks = await this.taskRepository.find({
      where: { id: In(ids) },
    });

    if (!tasks.length) {
      throw new NoPendingTasksFoundException(ids);
    }

    return tasks;
  }
  async updateTaskCompletionStatus(id: number, completed: boolean) {
    const update = await this.taskRepository.update(id, { completed });

    console.log(update);
  }
}
