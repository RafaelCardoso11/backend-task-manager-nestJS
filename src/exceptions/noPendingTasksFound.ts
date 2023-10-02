import { NotFoundException } from '@nestjs/common';

export class NoPendingTasksFoundException extends NotFoundException {
  constructor(ids: number[]) {
    super(`No pending tasks found with the following IDs: ${ids.join(', ')}`);
  }
}
