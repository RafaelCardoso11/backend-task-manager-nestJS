import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTask1624001234567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'task',
        columns: [
          {
            name: 'id',
            type: 'int',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '127',
          },
          {
            name: 'description',
            type: 'varchar',
            length: '300',
            isNullable: true,
          },
          {
            name: 'priority',
            type: 'enum',
            enum: ['LOW', 'MEDIUM', 'HIGH'],
          },
          {
            name: 'dueDate',
            type: 'date',
          },
          {
            name: 'completed',
            type: 'boolean',
            default: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('task');
  }
}
