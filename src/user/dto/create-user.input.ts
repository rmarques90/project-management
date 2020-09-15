import { InputType } from '@nestjs/graphql';
import {IsString, IsNotEmpty, IsEmail, IsBoolean, IsOptional} from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsBoolean()
    @IsOptional()
    isAdmin?: boolean;
}