import {MigrationInterface, QueryRunner} from "typeorm";

export class Baseline1600221841362 implements MigrationInterface {
    name = 'Baseline1600221841362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `role` enum ('admin', 'user') NOT NULL DEFAULT 'user', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `project` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `project_users_user` (`projectId` int NOT NULL, `userId` int NOT NULL, INDEX `IDX_9666c6dcd769c698bed4aa4bf5` (`projectId`), INDEX `IDX_f8300efd87679e1e21532be980` (`userId`), PRIMARY KEY (`projectId`, `userId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `project_users_user` ADD CONSTRAINT `FK_9666c6dcd769c698bed4aa4bf55` FOREIGN KEY (`projectId`) REFERENCES `project`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `project_users_user` ADD CONSTRAINT `FK_f8300efd87679e1e21532be9808` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `project_users_user` DROP FOREIGN KEY `FK_f8300efd87679e1e21532be9808`");
        await queryRunner.query("ALTER TABLE `project_users_user` DROP FOREIGN KEY `FK_9666c6dcd769c698bed4aa4bf55`");
        await queryRunner.query("DROP INDEX `IDX_f8300efd87679e1e21532be980` ON `project_users_user`");
        await queryRunner.query("DROP INDEX `IDX_9666c6dcd769c698bed4aa4bf5` ON `project_users_user`");
        await queryRunner.query("DROP TABLE `project_users_user`");
        await queryRunner.query("DROP TABLE `project`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
