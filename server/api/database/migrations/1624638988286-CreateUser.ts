import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1623957922252 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TABLE IF NOT EXISTS `users` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `admin` boolean NOT NULL DEFAULT false, `password` varchar(255) NULL, `created_at` timestamp NOT NULL DEFAULT now(), `updated_at` timestamp NOT NULL DEFAULT now(), PRIMARY KEY (`id`)) ENGINE=InnoDB;")
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
