import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRoles1600142615457 implements MigrationInterface {
    name = 'UserRoles1600142615457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `role` enum ('admin', 'user') NOT NULL DEFAULT 'user'");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `role`");
    }

}
