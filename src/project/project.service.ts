import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>
    ) {}

    async findAll(): Promise<Project[]> {
        return await this.projectRepository.find();
    }

    async findProjectById(id: string): Promise<Project> {
        const project = await this.projectRepository.findOne(id);

        if (!project) {
            throw new NotFoundException('Project not found');
        }
        return project;
    }

    async createProject(data: CreateProjectInput): Promise<Project> {
        const project = this.projectRepository.create(data);

        const projectSaved = await this.projectRepository.save(project);

        if (!projectSaved) {
            throw new InternalServerErrorException('Error saving new project');
        }
        return projectSaved;
    }


}
