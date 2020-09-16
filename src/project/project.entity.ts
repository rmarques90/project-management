import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "src/user/user.entity";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    name: string;

    @Column()
    description?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => User)
    @JoinTable()
    users?: User[];
}