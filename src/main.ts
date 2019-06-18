import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const appOptions = {};
  const app = await NestFactory.create(AppModule, appOptions);
  // app.setGlobalPrefix('api');
  app.enableCors({
    // origin: ‘http://localhost:4200’
    // origin?: boolean | string | RegExp | (string | RegExp)[] | CustomOrigin;
    // methods?: string | string[];
    // allowedHeaders?: string | string[];
    // exposedHeaders?: string | string[];
    // credentials?: boolean;
    // maxAge?: number;
    // preflightContinue?: boolean;
    // optionsSuccessStatus?: number;
  });
  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    console.log('API is listening on port ' + port);
  });
}
bootstrap();
