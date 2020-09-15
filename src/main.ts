import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { GraphQLSchemaHost } from '@nestjs/graphql';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.use(compression());
  app.useGlobalPipes(new ValidationPipe()); //serve para ativar as validacoes do classvalidator
  const PORT = process.env.PORT || 3333;
  await app.listen(PORT);

  const { schema } = app.get(GraphQLSchemaHost);
}
bootstrap();
