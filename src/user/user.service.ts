import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: Repository<User>
    ) {}

    async create(createUserDTO: CreateUserDTO): Promise<User> {
        return this.userRepository.save(createUserDTO);
    }

    async findByName(name: string): Promise<User[]> {
        return this.userRepository.find({ name })
    }

}
