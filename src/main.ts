import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { dump } from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // for dump json
  fs.writeFileSync(
    './doc/swagger-spec.json',
    JSON.stringify(document, undefined, 2),
  );
  // for dump yaml
  fs.writeFileSync('./doc/swagger-spec.yaml', dump(document, {}));

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
