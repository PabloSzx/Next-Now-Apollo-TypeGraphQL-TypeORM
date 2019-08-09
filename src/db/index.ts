import { toInteger } from "lodash";
import { ConnectionOptions } from "typeorm";

import { User } from "../entities/user";

export const dbConfig: ConnectionOptions = {
  type: "postgres",
  entities: [User],
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || undefined,
  database: process.env.DB_NAME || "postgres",
  port: toInteger(process.env.DB_PORT) || 5432,
  synchronize: true,
  logging: true,
};
