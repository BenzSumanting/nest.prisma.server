import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/response/response.interceptor';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseInterceptor(), new ClassSerializerInterceptor(app.get(Reflector)));

  app.setGlobalPrefix('admin');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
