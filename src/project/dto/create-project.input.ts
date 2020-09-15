import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsOptional, IsArray } from "class-validator";
import { User } from "src/user/user.entity";

@InputType()
export class CreateProjectInput {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsArray()
    users?: User[];
}