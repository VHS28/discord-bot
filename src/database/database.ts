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
      event_type,
      display_name_snapshot,
      occurred_at
    FROM member_events
    ORDER BY occurred_at DESC
    LIMIT ?
  `);

  const rows = statement.all(limit) as {
    event_type: "join" | "leave";
    display_name_snapshot: string;
    occurred_at: string;
  }[];

  return rows.map((row) => ({
    type: row.event_type,
    displayName: row.display_name_snapshot,
    occurredAt: row.occurred_at,
  }));
}
