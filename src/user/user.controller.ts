import { Controller, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}
    
    @Post()
    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        return this.userService.create(createUserDTO);
    }

    @Get(':name')
    async getUserByName(@Param('name') name: string): Promise<User[]> {
        return this.userService.findByName(name);
    }

}
