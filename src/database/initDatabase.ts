import { db } from "./database.js";

export function initDatabase(): void {
  db.prepare(`
    CREATE TABLE IF NOT EXISTS member_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_type TEXT NOT NULL,
      display_name_snapshot TEXT NOT NULL,
      discord_user_id_hash TEXT NOT NULL,
      occurred_at TEXT NOT NULL,
      guild_id TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  `).run();
}