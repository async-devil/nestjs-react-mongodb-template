import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

const HOST = `${process.env.MONGO_HOST || "mongodb://localhost"}`;
const PORT = `${process.env.MONGO_PORT || "27017"}`;
const DB = `${process.env.MONGO_DB || "test"}`;

@Module({
	imports: [MongooseModule.forRoot(`${HOST}:${PORT}/${DB}`)],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
