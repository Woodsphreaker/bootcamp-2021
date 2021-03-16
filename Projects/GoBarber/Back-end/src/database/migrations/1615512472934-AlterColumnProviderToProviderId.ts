import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

class AlterColumnProviderToProviderId1615512472934
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'provider')

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({ name: 'provider_id', type: 'uuid', isNullable: false })
    )

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'appointments_users_FK', // alias of foreign key
        columnNames: ['provider_id'], // column on appointments table
        referencedTableName: 'users', // table users
        referencedColumnNames: ['id'], // reference column on user table (id is primary key)
        onDelete: 'SET NULL', // on delete user on table users, set provider_id null
        onUpdate: 'CASCADE', // on update user on table users, update provider_id on table appointments
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'appointments_users_FK')
    await queryRunner.dropColumn('appointments', 'provider_id')
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({ name: 'provider', type: 'varchar', isNullable: false })
    )
  }
}

export default AlterColumnProviderToProviderId1615512472934
