import { AppModule } from './app.module';
import { LogInfo } from '@utils/logger';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as activityLogs from '@enums/active-logs'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: true,
      credentials: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    },
    logger: ['error', 'warn', 'debug', 'log'],
  });

  const configService = app.get(ConfigService);

  app.setGlobalPrefix(configService.get('app.apiPrefix'));

  const options = new DocumentBuilder()
    .setTitle('Test Dev Ops App')
    .setDescription('API docs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  const APP_PORT = configService.get('app.port');

  await app.listen(APP_PORT, () => {

    LogInfo(activityLogs.BooksLogsFunctions.AppServerConnect, activityLogs.LogsActions.Succeed, {message:`App running in http://localhost:${APP_PORT}`})
  });
}

bootstrap();
