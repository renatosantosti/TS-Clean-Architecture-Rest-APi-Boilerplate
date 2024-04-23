import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import defaultRouter from "./presentation/routes/default/router";
import liveCheckRouter from "./presentation/routes/live-check/router";
import authRouter from "./presentation/routes/auth/router";
import statusCheckRouter from "./presentation/routes/status-check/router";
import { serverConfig } from "./config";


const PORT = serverConfig.port || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'NodeJs +TypeScript + Swagger Api Boilerplate',
    version: '1.0.0',
    description:
      'This is a boilerplate REST API application made with TS + Express + TSoa + Swagger.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Renato Santos',
      url: 'https://github.com/renatosantosti/node-ts-swagger-boilerplate',
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        in: 'header',
        name: 'authorization',
        description: 'Bearer Token',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions. It applied *.* to accept both .js and .ts extension for dev and after built the project.
  apis: [`**/*.ts`, `${__dirname}/presentation/routes/**/*.js`,],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Define route to api documentation (swagger)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Apply all other routers
app.use(defaultRouter);
app.use(liveCheckRouter);
app.use(statusCheckRouter);
app.use(authRouter);

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
