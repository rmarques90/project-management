import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CurrentUser } from 'src/utils/custom-decorators/current-user.decorator';

@UseGuards(GqlAuthGuard)
@Resolver()
export class UserResolver {
    constructor(
        private userService: UserService
    ) {}

    @Query(() => [User])
    async users(
        @CurrentUser() user: User
    ): Promise<User[]> {
        console.log('user request: ', user);
        return await this.userService.findAllUsers();
    }

    @Query(() => User)
    async user(
        @Args('id') id: string
    ): Promise<User> {
        return await this.userService.findUserById(id);
    }

    @Mutation(() => User)
    async createUser(
        @Args('data') data: CreateUserInput
    ): Promise<User> {
        const user = await this.userService.createUser(data);
        return user;
    }

    @Mutation(() => User)
    async updateUser(
        @Args('id') id: string,
        @Args('data') data: UpdateUserInput
    ): Promise<User> {
        const userUpdated = await this.userService.updateUser(id, data);
        return userUpdated;
    }

    @Mutation(() => Boolean)
    async deleteUser(
        @Args('id') id: string
    ): Promise<boolean> {
        return await this.userService.deleteUser(id);
    }
}
