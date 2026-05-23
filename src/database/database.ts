import Database from "better-sqlite3";
import { loadEnv } from "../config/env.js";

const env = loadEnv();

export const db = new Database(
  env.databaseUrl.replace("file:", ""),
);