import { Module } from '@nestjs/common';
import { ProjectResolver } from './project.resolver';

@Module({
  controllers: [],
  providers: [ProjectResolver]
})
export class ProjectModule {}
