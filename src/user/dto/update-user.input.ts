import { InputType } from '@nestjs/graphql';
import {IsString, IsEmail, IsBoolean, IsOptional, IsNotEmpty} from 'class-validator';

@InputType()
export class UpdateUserInput {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name?: string;

    @IsEmail()
    @IsOptional()
    @IsNotEmpty()
    email?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    password?: string;

    @IsBoolean()
    @IsOptional()
    @IsNotEmpty()
    isAdmin?: boolean;
}