import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';

@Resolver()
export class ProjectResolver {
    constructor(
        private readonly projectService: ProjectService 
    ) {}

    @Query(() => [Project])
    async projects(): Promise<Project[]> {
        return await this.projectService.findAll();
    }

    @Query(() => Project)
    async project(
        @Args('id') id: string
    ): Promise<Project> {
        return await this.projectService.findProjectById(id);
    }

   /*  @Mutation(() => Project)
    async createProject(
        @Args('data') data: CreateProjectInput
    ): Promise<Project> {
        return await this.projectService.createProject(data);
    }

    @Mutation(() => Project)
    async updateProject(
        @Args('id') id: string,
        @Args('data') data: UpdateProjectInput
    ): Promise<Project> {
        return await this.projectService.updateProject(id, data);
    } */


}
