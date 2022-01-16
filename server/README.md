# Server folder

This folder was bootstrapped with [NestJS](https://nestjs.com/).

## File structure:

- src

  - main.ts
  - app.module.ts
  - your_module
    - dto
    - schemes
    - your_module.module.ts

- tests

## Info:

By default server starts on [http://localhost:5000](http://localhost:5000). You can reconfigure that by adding SERVER_PORT parameter to the .env file.
Default root is /api, which is defined in `app.module.ts`. Access to [swagger](https://docs.nestjs.com/openapi/introduction) documentation is /api/docs, which is defined in `main.ts`.

### Default settings for mongodb and .env parameter names are:

- host: `mongodb://localhost`; MONGO_HOST
- port: `27017`; MONGO_PORT
- db name: `test`; MONGO_DB

## Installed plugins:

- [swagger](https://docs.nestjs.com/openapi/introduction)
- [mongoose](https://docs.nestjs.com/techniques/mongodb)
- [typescript](https://www.typescriptlang.org/)
- [jest](https://docs.nestjs.com/fundamentals/testing)
