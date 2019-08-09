import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import express from "express";
import { Container } from "typedi";
import { createConnection, useContainer } from "typeorm";

import { dbConfig } from "../src/db";
import { GraphQLSchema as schema } from "../src/graphql";

const app = express();

useContainer(Container);

const connection = createConnection(dbConfig);

const apolloServer = new ApolloServer({
  schema,
  playground:
    process.env.NODE_ENV !== "production"
      ? {
          settings: {
            "request.credentials": "include",
          },
        }
      : false,
});

app.use(async (_req, _res, next) => {
  await connection;
  next();
});

apolloServer.applyMiddleware({
  app,
  path: "/api/graphql",
});

export default app;

export const config = {
  api: {
    bodyParser: false,
  },
};
