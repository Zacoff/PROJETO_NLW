import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTags1624045772320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TABLE IF NOT EXISTS `tags` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `created_at` timestamp NOT NULL DEFAULT now(), `updated_at` timestamp NOT NULL DEFAULT now(), PRIMARY KEY (`id`)) ENGINE=InnoDB")
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tags");
  }
}
