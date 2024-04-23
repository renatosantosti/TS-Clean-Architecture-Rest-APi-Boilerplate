# TS-Clean-Architecture-Rest-APi-Boilerplate: TS Clean Archicterure Rest API with Swagger BoilerPlate
##### _TS-Clean-Architecture-Rest-APi-Boilerplate is a RESTful API implemented in TypeScript using Express.js and Swagger. It follows the principles of Clean Architecture, focusing on separation of concerns and maintainability._

This project aims to provide an easier boilerplate to start an simple Rest API on TypeScript and Swagger implemented over Clean Archicteture concepts.

- TypeScript
- Express
- Swagger
- Swagger-UI-Express
- Swagger-JSDoc
- TSoa
- Morgan
- JWT
- BCrypt 
- DotEnv
- Docker

## Features
Built with TypeScript for type safety and enhanced developer experience.
Utilizes Express.js for robust and scalable routing.
Implements Swagger for clear and interactive API documentation.
Adheres to Clean Architecture principles for modularity and testability.

## Other features
- Provide TS configuration
- Provide examples for Rest GET Api
- Provide http route to autenticate user and generate valid token
- Create restricted http route only granted if valid bearer token is used on header autorization
- Provide Swagger documentation for GET and POST routers
- Provide Bearer Authentication on Swagger 
- Split routers, controllers and interfaces on different folders
- For security purpose:
    - Mock autenticate user access by email & password
    - Creating autorization token
    - Refresh existing and valid token otherwise invalidate this action
- And also you can run project as Docker container

## Getting Started
To get started with TS-Clean-Architecture-Rest-APi-Boilerplate, follow these steps:

Clone the repository: 
```sh
    git clone github.com/renatosantosti/TS-Clean-Architecture-Rest-APi-Boilerplate.git
```
Install dependencies: 
```sh 
npm install
```
Start the development server: 
```sh 
npm run dev
```

## Try from from scrach by youself

If we want learn to implements this project by yourself I would recommend you to follow these step below and also you should take time to read recommended references.

#### Creating project 

```sh
mkdir node-ts-express-jwt-swagger-api-boilerplate
cd express-typescript
npm init -y
```

#### Install dependencies
 Install TypeScript: 
 ```sh
 npm i -D typescript
 ```
 
 Add tsconfig.json file
```sh
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./build",
    "strict": true,
    "esModuleInterop": true
  }
}
```

Install Express as dependency and type definitions of node and express as development dependencies.

```sh
npm i -S express
npm i -D @types/express @types/node
```

Adding Express Middlewares
```sh
npm i -S morgan
npm i -D @types/morgan
npm i -S joi
```

Install NodeMon
```sh
npm i -D ts-node nodemon
```

Install Swagger and its dependencies

```sh
npm i -S tsoa swagger-ui-express
npm i -D @types/swagger-ui-express concurrently
```
to that last dependencies just add following settings on tsconfig.json
```sh
{
  "compilerOptions": {
    ...
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

#### Install security dependencies

To encrypt password
```sh
npm i -S bcrypt jsonwebtoken
npm i -D @types/bcrypt @types/jsonwebtoken
```


Finally change package.json to this:
```sh
"scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "nodemon"
  },
```
## Docker

Throught the  node-ts-express-jwt-swagger-api-boilerplate is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd node-ts-express-jwt-swagger-api-boilerplate
docker build --no-cache -t node-ts-express-jwt-swagger-api-boilerplate-image .
```

This will create the boilerplate image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8080:8000 --restart=always --cap-add=SYS_ADMIN --name=node-ts-express-jwt-swagger-api-boilerplate-container node-ts-express-jwt-swagger-api-boilerplate-image
```

Verify the deployment by navigating to your server address in
your preferred browser and voila!

```sh
http://127.0.0.1:8080/api-docs/
```

#### See Docker logs for container
```sh
docker logs -f node-ts-express-jwt-swagger-api-boilerplate-container 
```

#### Entering Docker container 
```sh
docker exec -it node-ts-express-jwt-swagger-api-boilerplate-container sh
```
#### Check open ports on alpine Linux 
```sh
netstat -lntu
```

## Contributors

| Used Projects | Link |
| ------ | ------ |
| TypeScript | https://www.typescriptlang.org |
| Express | https://expressjs.com |
| Swagger | https://swagger.io |
| Swagger-JsDoc | https://github.com/Surnet/swagger-jsdoc |
| TSoa | https://github.com/lukeautry/tsoa |
| Morgan | https://expressjs.com/en/resources/middleware/morgan.html|
| Docker | https://docs.docker.com |

Additionally read about **JSDoc 3** is an API documentation generator for JavaScript, similar to Javadoc or phpDocumentor: https://swagger.io/specification

And also the **OpenAPI Specification (OAS)** defines a standard, language-agnostic interface to HTTP APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic: https://swagger.io/specification

### Rest API References
 - https://medium.com/ms-club-of-sliit/building-rest-api-with-express-js-typescript-and-swagger-387a9c731717
 - https://github.com/ThorstenBux/express-typescript-swagger-boilerplate
 - https://rsbh.dev/blogs/rest-api-with-express-typescript
 - https://chinwendu.medium.com/how-to-dockerize-your-typescript-application-with-multi-stage-build-a-step-by-step-guide-56e7c4274088
 - https://rsbh.dev/blogs/rest-api-express-typescript-docker
 - https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do
 - https://www.linkedin.com/pulse/documenting-nodejs-rest-api-using-swagger-avyavesh-technologies
 - https://blog.lsantos.dev/jwt-seguro/
 - https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1

 ### Clean Code References
 - https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
 - https://khalilstemmler.com/articles/enterprise-typescript-nodejs/application-layer-use-cases/

## License

MIT

**Free Software, Hell Yeah!**
