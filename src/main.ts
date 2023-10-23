import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const SWAGGER_UI_PATH =
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tracktr API')
    .setDescription('Tracktr API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document, {
    customCssUrl: `${SWAGGER_UI_PATH}swagger-ui.min.css`,
    customJs: [
      `${SWAGGER_UI_PATH}swagger-ui-bundle.js`,
      `${SWAGGER_UI_PATH}swagger-ui-standalone-preset.js`,
    ],
  });

  await app.listen(3000);
}
bootstrap();
