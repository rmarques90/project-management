import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './db/config.service';
import { UserModule } from './user/user.module';
import { ProjectService } from './project/project.service';
import { ProjectModule } from './project/project.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()), 
    UserModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService, ProjectService],
})
export class AppModule {}
