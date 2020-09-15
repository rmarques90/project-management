import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { Project } from './project/project.entity';
import { ComplexityPlugin } from './utils/plugins/complexity.plugin';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    "type": "mysql",
    "host": process.env.DATABASE_HOST,
    "port": parseInt(process.env.DATABASE_PORT),
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "entities": [User, Project],
    }),
    GraphQLModule.forRoot({
        context: ({ req }) => ({ req }),
        autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }), 
    AppService,
    ProjectModule,
    UserModule,
    AuthModule
    ],
  controllers: [AppController],
  providers: [AppService, ComplexityPlugin],
})
export class AppModule {}
