# NestJS-React-MongoDB template [![wakatime](https://wakatime.com/badge/user/bc8fa60c-fa34-4507-b70f-24bdba32a74d/project/cb758364-5c0d-4ba7-9fd1-816058d6c2d7.svg)](https://wakatime.com/badge/user/bc8fa60c-fa34-4507-b70f-24bdba32a74d/project/cb758364-5c0d-4ba7-9fd1-816058d6c2d7) <hr/>

This template is based on the [Create React App](https://github.com/facebook/create-react-app) and the [NestJS](https://nestjs.com/) project builder.

# Technologies:

- Server:

  - NestJS
  - Mongoose
  - Swagger

- Client:

  - React
  - Styled components
  - SCSS

- General:

  - Typescript
  - Prettier
  - Eslint
  - Jest

More information about technologies is inside client and server folders.

# How to install additional packages:

1. `cd client | server`
2. `yarn add package`
3. `cd ../`

# Commands

- `yarn start:dev` start developing session
- `yarn start:server` start server in developing mode
- `yarn start:client` start client in developing mode
- `yarn test` test client and server
- `yarn test:client` test client
- `yarn test:server` test server

You can use also scripts which are inside the folders.

# Environment variables:

Template supports developing and production env files. Will be using `.env.development` file for developing scripts and `.env.production` for build purposes.
All information about available parameters for environment is inside the folders.
