import Database from "better-sqlite3";
import { loadEnv } from "../config/env.js";

const env = loadEnv();

export const db = new Database(
  env.databaseUrl.replace("file:", ""),
);

export interface PublicMemberEvent {
  type: "join" | "leave";
  displayName: string;
  occurredAt: string;
}

export function getRecentPublicMemberEvents(
  limit = 10,
): PublicMemberEvent[] {
  const statement = db.prepare(`
    SELECT
      type,
      display_name,
      occurred_at
    FROM member_events
    ORDER BY occurred_at DESC
    LIMIT ?
  `);

  const rows = statement.all(limit) as {
    type: "join" | "leave";
    display_name: string;
    occurred_at: string;
  }[];

  return rows.map((row) => ({
    type: row.type,
    displayName: row.display_name,
    occurredAt: row.occurred_at,
  }));
}