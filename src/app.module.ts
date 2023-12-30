import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GlobalModule } from 'common/modules/global.module';
import {
  configApp,
  configPostgres,
} from 'common/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        configApp,
        configPostgres,
      ],
      envFilePath: ['.env'],
    }),
    GlobalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
