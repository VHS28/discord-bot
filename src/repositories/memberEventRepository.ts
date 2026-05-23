import { db } from "../database/database.js";

export type MemberEventType = "join" | "leave";

export interface MemberEventRecord {
  eventType: MemberEventType;
  displayNameSnapshot: string;
  discordUserIdHash: string;
  occurredAt: string;
  guildId: string;
}

export function saveMemberEvent(event: MemberEventRecord): void {
  db.prepare(`
    INSERT INTO member_events (
      event_type,
      display_name_snapshot,
      discord_user_id_hash,
      occurred_at,
      guild_id,
      created_at
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(
    event.eventType,
    event.displayNameSnapshot,
    event.discordUserIdHash,
    event.occurredAt,
    event.guildId,
    new Date().toISOString(),
  );
}
