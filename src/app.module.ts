import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ComplexityPlugin } from './utils/plugins/complexity.plugin';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }), 
    AppService,
    ProjectModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService, ComplexityPlugin],
})
export class AppModule {}
