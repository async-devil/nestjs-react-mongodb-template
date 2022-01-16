import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

const port = process.env.SERVER_PORT || 5000;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder().setTitle("Nestjs template").setVersion("1.0.0").build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("/api/docs", app, document);
	await app.listen(port);
}

void bootstrap();
