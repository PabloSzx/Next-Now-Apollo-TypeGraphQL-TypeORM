import { buildSchemaSync } from "type-graphql";
import { Container } from "typedi";

import { UserResolver } from "./resolvers/user";

export const GraphQLSchema = buildSchemaSync({
  resolvers: [UserResolver],
  validate: false,
  container: Container,
});
