import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProvider1621016928881 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'providers',
        columns: [
          {
            name: 'provider_id',
            type: 'uuid',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'whatsapp',
            type: 'integer',
          },
          {
            name: 'work_routine',
            type: 'varchar',
          },
          {
            name: 'opening_hours',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'ProviderId',
            columnNames: ['provider_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('providers', 'ProviderId');
    await queryRunner.dropTable('providers');
  }
}
