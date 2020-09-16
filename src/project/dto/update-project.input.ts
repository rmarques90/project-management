import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsOptional, IsArray } from "class-validator";
import UserProjectInput from "./user-related.input";

@InputType()
export class UpdateProjectInput {
    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsArray()
    users?: UserProjectInput[];
}