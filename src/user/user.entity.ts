import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { UserRoles } from "src/utils/constants";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Exclude } from 'class-transformer';

@ObjectType()
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({type: 'enum', enum: UserRoles, default: UserRoles.USER})
    role: string;
}