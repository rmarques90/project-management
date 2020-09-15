import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findUserById(id: string): Promise<User> {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new NotFoundException('user not found =(');
        }

        return user;
    }

    async createUser(data: CreateUserInput): Promise<User> {
        const user = this.userRepository.create(data);
        const userSaved = await this.userRepository.save(user);

        if (!userSaved) {
            throw new InternalServerErrorException('Error saving user');
        }

        return userSaved;
    }

    async updateUser(id: string, data: UpdateUserInput): Promise<User> {
        const user = await this.findUserById(id);
        if (!user) {
            throw new NotFoundException('User not found to update');
        }
        const userUpdate = this.userRepository.create({...user, ...data});
        await this.userRepository.save(userUpdate);

        return userUpdate;
    }

    async deleteUser(id: string): Promise<boolean> {
        const user = await this.findUserById(id);
        if (!user) {
            throw new NotFoundException('user not found to remove');
        }

        const deleted = await this.userRepository.remove(user);

        if (deleted) {
            return true;
        }
        return false;
    }
}
