import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe()); //serve para ativar as validacoes do classvalidator
  const PORT = process.env.PORT || 3333;
  await app.listen(PORT);
}
bootstrap();
