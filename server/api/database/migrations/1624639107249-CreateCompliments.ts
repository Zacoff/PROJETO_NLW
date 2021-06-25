import {MigrationInterface,QueryRunner,} from "typeorm";
  
export class CreateCompliments1624302072284 implements MigrationInterface {
public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("CREATE TABLE IF NOT EXISTS `compliments` (`id` varchar(255) NOT NULL, `user_sender` varchar(255) NULL, `user_receiver` varchar(255) NULL, `tag_id` varchar(255) NULL, `message` varchar(255) NULL, `created_at` timestamp NOT NULL DEFAULT now(), CONSTRAINT `FKUserSenderCompliments` FOREIGN KEY (`user_sender`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL, CONSTRAINT `FKUserReceiverCompliments` FOREIGN KEY (`user_receiver`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE SET NULL, CONSTRAINT `FKTagCompliments` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE SET NULL ON UPDATE SET NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;");
    }

public async down(queryRunner: QueryRunner): Promise<void> {
await queryRunner.dropTable("compliments");
}
}