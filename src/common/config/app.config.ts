import { ConfigService, registerAs } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

export interface I_AppConfig {
  nodeEnv: string;
  name: string;
  frontendDomain: string;
  port: number;
  apiPrefix: string;
}

export default registerAs(
  'app',
  (): I_AppConfig => ({
    nodeEnv: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    frontendDomain: process.env.FRONTEND_DOMAIN,
    port: parseInt(process.env.APP_PORT || process.env.PORT, 10) || 3001,
    apiPrefix: process.env.API_PREFIX,
  }),
);
